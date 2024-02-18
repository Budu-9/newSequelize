const userController = require('../controllers/userController')
const express = require('express')
const router = express.Router()


router.post('/addUser', userController.addUser)
router.get('/selectAll', userController.getAllUser)
router.get('/:id', userController.getOneUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)


module.exports = router