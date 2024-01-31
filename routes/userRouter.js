const userController = require('../controllers/userController')
const express = require('express')
const router = express.Router()
//const User = require('../models/userModel')

router.post('/addUser', userController.addUser)
router.get('/selectAll', userController.getAllUser)

module.exports = router