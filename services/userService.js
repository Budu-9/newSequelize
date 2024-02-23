const db = require('../models')

// main model
const User = db.students

class userService{
    async createUser(userData) {
        try {
            const user = await User.create(userData)
            return user
        } catch (error) {
            throw new Error(error)
        }
    }
    async getUserById(userId) {
        try {
            const user = await User.findByPk(userId)
            if(!user) throw new Error('user not found')
            return user
        } catch (error) {
            throw new Error(error)
        }
    }
    async getAllUser(){
        try {
            const user = await User.findAll()
            return user
        } catch (error) {
            throw new Error(error)
        }
    }
    async updateUser(userId,userData){
        try {
            const user = await this.getOneUser(userId)
            await User.update(userData)
            return user
        } catch (error) {
            throw new Error(error)
        }
    }
    async deleteUser(userId){
        try {
            const user = await this.getOneUser(userId)
            await User.destroy()
        } catch (error) {
            throw new Error(error)
        }
    }

}

module.exports = userService