const express = require("express")
const router = express.Router()
const fs = require("fs")
const { promisify } = require('util')
const pipeline = promisify(require("stream").pipeline)
const multer = require("multer")
const upload = multer()


router.post("/upload", upload.single("file"), async function(req, res, next) {
    const {
      file,
      body: { name }
    } = req;
  
    const fileName = name + file.detectedFileExtension;
    await pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/../images/${fileName}`)
    );
  
    res.send("File uploaded as " + fileName);
  });

module.exports = router