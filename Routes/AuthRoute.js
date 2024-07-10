const express = require( 'express')
const  {registerUser, loginUser, changePassword } = require( '../Controller/AuthController.js')

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/change-pw', changePassword)

module.exports = router

