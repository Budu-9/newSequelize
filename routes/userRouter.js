const userController = require('../controllers/userController')
const express = require('express')
const router = express.Router()


router.post('/addUser', userController.addUser)
router.post('/bulkCreate', userController.addBulkUser)
router.get('/selectAll', userController.getAllUser)
router.get('/:id', userController.getOneUser)
router.put('/:id', userController.updateUser)
router.put('/bulkUpdate', userController.updateBulkUsers)
router.delete('/:id', userController.deleteUser)


module.exports = router