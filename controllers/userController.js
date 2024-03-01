const UserService = require('../services/userService')
const userService = new UserService()

// create User
async function addUser(req,res){
    try {
        const userData = req.body
        const student = await userService.createUser(userData)
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({error:'error creating user'})
        console.log(error)
    }
}

// create bulk user
async function addBulkUser(req,res){
    try {
        const usersData = req.body
        const students = await userService.createBulkUsers(usersData)
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json({error:'error creating user'})
        console.log(error)
    }
}

// get all User 
async function getAllUser (req,res){
    
    try {
        const students = await userService.getAllUser() 
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json({error:'error getting users'})
        console.log(error)
    }
}

//get one User
async function getOneUser(req,res){
    try {
        const userId = req.params.id_students
        const student = await userService.getUserById(userId)
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({error:'error getting user'})
        console.log(error)
    }
}

// update a User

async function updateUser(req,res){
    try {
        const userId = req.params.id_students
        const userData = req.body
        const user = await userService.updateUser(userData,userId) 
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error:'error updating user'})
    }    
}

// update bulk users
async function updateBulkUsers(req,res){
    try {
        //const userId = req.params.id_students
        const usersData = req.body
        const users = await userService.updateBulkUsers(usersData) 
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error:'error updating user'})
    }    
}


// delete User

async function deleteUser(req,res){
    try {
        const userId = req.params.id_students
        await userService.deleteUser(userId)
        res.status(200).send('deletion successful')
    } catch (error) {
        res.status(500).json({error:'error deleting user'})
    }    
}


module.exports = {
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
    addBulkUser,
    updateBulkUsers
}