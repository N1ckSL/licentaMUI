const userSubjectControl = require ("../controllers/userSubjectControl")
const router = require('express').Router()

router.get('https://eschool-backend-server.herokuapp.com/all/:year', userSubjectControl.findUserSubject)
router.get('https://eschool-backend-server.herokuapp.com/all/:year/:user', userSubjectControl.findUserSubject)
router.post('https://eschool-backend-server.herokuapp.com/create', userSubjectControl.createUserSubject)
//router.post('/create/grade', userSubjectControl.createGrade)
router.delete('https://eschool-backend-server.herokuapp.com/delete/:id', userSubjectControl.deleteUserSubject)
router.patch('https://eschool-backend-server.herokuapp.com/update', userSubjectControl.updateUserSubject)

//router.patch('/update/grade', userSubjectControl.updateGradeSubject)

module.exports = router