const subjectControl = require ("../controllers/subjectControl")
const router = require('express').Router()

router.get('https://eschool-backend-server.herokuapp.com/all', subjectControl.getSubjects)
router.post('https://eschool-backend-server.herokuapp.com/create', subjectControl.createSubject)

module.exports = router