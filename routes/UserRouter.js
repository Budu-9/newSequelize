const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const userController = new UserController()

router.post('/addUser', async(req,res) =>{
    await userController.addUser(req,res)
})
router.post('/bulkCreate', async(req,res) =>{
    await userController.addBulkUser(req,res)
})
router.get('/selectAll', async(req,res) =>{
    await userController.getAllUser(req,res)
})
router.get('/:id', async(req,res) =>{
    await userController.getOneUser(req,res)
})
router.put('/:id', async(req,res) =>{
    await userController.updateUser(req,res)
})
router.put('/bulkUpdate', async(req,res) =>{
    await userController.updateBulkUsers(req,res)
})
router.delete('/:id', async(req,res) =>{
    await userController.deleteUser(req,res)
})


module.exports = router