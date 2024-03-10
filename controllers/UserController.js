const UserService = require('../services/UserService')


class UserController{
    constructor(){
        this.userService = new UserService()
    }
    
    // create User
    async addUser(req,res){
        try {
            const userData = req.body
            //call createUsers method from the UserService class
            const student = await this.userService.createUser(userData)
            res.status(200).json(student)
        } catch (error) {
            res.status(500).json({error:'error creating user'})
            console.log(error)
        }
    }

    // create bulk user
    async addBulkUser(req,res){
        try {
            const usersData = req.body
            //call createBulkUsers method from the UserService class
            const students = await this.userService.createBulkUsers(usersData)
            res.status(200).json(students)
        } catch (error) {
            res.status(500).json({error:'error creating user'})
            console.log(error)
        }
    }

    // get all User 
    async getAllUser (req,res){
        
        try {
            // calling getAllUser method from UserService class
            const students = await this.userService.getAllUser() 
            res.status(200).json(students)
        } catch (error) {
            res.status(500).json({error:'error getting users'})
            console.log(error)
        }
    }

    //get one User
    async getOneUser(req,res){
        try {
            const userId = req.params.id_students
            // calling getUserById method from UserService class
            const student = await this.userService.getUserById(userId)
            res.status(200).json(student)
        } catch (error) {
            res.status(500).json({error:'error getting user'})
            console.log(error)
        }
    }

    // update a User
    async updateUser(req,res){
        try {
            const userId = req.params.id_students
            const userData = req.body
            // calling updateUser method from UserService class
            const user = await this.userService.updateUser(userData,userId) 
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({error:'error updating user'})
        }    
    }

    // update bulk users
    async updateBulkUsers(req,res){
        try {
            //const userId = req.params.id_students
            const usersData = req.body
            // calling updateBulkUsers method from UserService class
            const users = await this.userService.updateBulkUsers(usersData) 
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({error:'error updating user'})
        }    
    }

    // delete User

    async deleteUser(req,res){
        try {
            const userId = req.params.id_students
            // calling method from UserService class
            await this.userService.deleteUser(userId)
            res.status(200).send('deletion successful')
        } catch (error) {
            res.status(500).json({error:'error deleting user'})
        }    
    }
}

module.exports = UserController