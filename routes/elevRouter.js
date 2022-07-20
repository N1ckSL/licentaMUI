const elevControl = require ("../controllers/elevControl")
const router = require('express').Router()

router.post('https://eschool-backend-server.herokuapp.com/elev', elevControl.getElevInfo)

module.exports = router