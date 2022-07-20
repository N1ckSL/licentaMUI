const subjectGradeControl = require ("../controllers/subjectGradeControl")
const router = require('express').Router()

router.post('https://eschool-backend-server.herokuapp.com/all', subjectGradeControl.getSubjectGrade)
router.post('https://eschool-backend-server.herokuapp.com/create', subjectGradeControl.createsubjectGrade)
router.patch('https://eschool-backend-server.herokuapp.com/update/:id', subjectGradeControl.updateGradeSubject)

module.exports = router