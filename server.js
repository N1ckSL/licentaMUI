require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const Years = require('./models/yearModel')
const Users = require('./models/userModel')
const bcrypt = require("bcrypt");
const cors = require('cors')
const fileUpload = require('express-fileupload')


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload())

// Routes
app.use('/user',require('./routes/userRouter'))
app.use('/elev',require('./routes/elevRouter'))
app.use('/subject',require('./routes/subjectRouter'))
app.use('/year',require('./routes/yearRouter'))
app.use('/userSubject',require('./routes/userSubjectRouter'))
app.use('/subjectGrade',require('./routes/subjectGradeRouter'))

app.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
    const fileName = "orar.jpg"+file.name
  
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });

// Conexiunea la mongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex:true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to MongoDB!");
})


const PORT = process.env.PORT || 5000 
app.listen(PORT, () => {
    console.log('Server running on port: ', PORT)
})

module.exports.Users = require("./models/userModel")
module.exports.Elev = require("./models/elevModel")
module.exports.ElevInstanta = require("./models/elevModelInstanta")
module.exports.Profesor = require("./models/profesorModel")
module.exports.Secretar = require("./models/secretarModel")
module.exports.Note = require("./models/noteModel")


//Adaugare informatie predefinita in baza de date empty 

Years.find().then(yearsInfo => {
    //if database is empty insert default years
    if(yearsInfo.length === 0){
        //current year
        const currentYear = new Years({
            value: (new Date()).getFullYear()
        });
        currentYear.save();

        //next year
        const nextYear = new Years({
            value: currentYear.value + 1,
        });
        nextYear.save();
    }
})

Users.find().then(async usersInfo => {
    if(usersInfo.length === 0){
        // if database is empty, insert default users->
        let crypt_password = await bcrypt.hash('123456', 12);

        //admin user
        const adminUser = new Users({
            role: 3,
            name: 'Secretary',
            email: 'admin@gmail.com',
            password: crypt_password
        });
        await adminUser.save();

        //student user
        const elevUser = new Users({
            role: 0,
            name: 'First Student',
            email: 'elev@gmail.com',
            password: crypt_password
        });
        await elevUser.save();

        //teacher user
        const teacherUser = new Users({
            role: 2,
            name: 'First Professor',
            email: 'teacher@gmail.com',
            password: crypt_password
        });
        await teacherUser.save();
    }
})