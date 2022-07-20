const yearControl = require ("../controllers/yearControl")
const router = require('express').Router()

router.get('https://eschool-backend-server.herokuapp.com/all', yearControl.getYears)
router.post('https://eschool-backend-server.herokuapp.com/create', yearControl.createYear)

module.exports = router