const userControl = require('../controllers/userControl')
const router = require('express').Router()
const auth = require ('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('https://eschool-backend-server.herokuapp.com/register', userControl.register)

router.post('https://eschool-backend-server.herokuapp.com/activation', userControl.activateEmail)

router.post('https://eschool-backend-server.herokuapp.com/create', userControl.createAccount)

router.post('https://eschool-backend-server.herokuapp.com/login', userControl.login)

router.post('https://eschool-backend-server.herokuapp.com/refresh_token', userControl.getAccessToken)

router.post('https://eschool-backend-server.herokuapp.com/forgot', userControl.forgotPassword)

router.post('https://eschool-backend-server.herokuapp.com/reset',auth, userControl.resetPassword)

router.get('https://eschool-backend-server.herokuapp.com/infor',auth, userControl.getUserInfor)

router.get('https://eschool-backend-server.herokuapp.com/all_infor',auth,  authAdmin, userControl.getUsersAllInfor)

router.get('https://eschool-backend-server.herokuapp.com/logout', userControl.logout)

router.patch('https://eschool-backend-server.herokuapp.com/update',auth, userControl.updateUser)

router.patch('https://eschool-backend-server.herokuapp.com/update_role/:id',auth, authAdmin, userControl.updateUserRole)

router.delete('https://eschool-backend-server.herokuapp.com/delete/:id',auth, authAdmin, userControl.deleteUser)

router.patch('https://eschool-backend-server.herokuapp.com/update_subject/:id', userControl.updateSubject)

router.post('https://eschool-backend-server.herokuapp.com/update_orar', userControl.updateOrar)

// GOOGLE

router.post('/google_login', userControl.googleLogin)

module.exports = router