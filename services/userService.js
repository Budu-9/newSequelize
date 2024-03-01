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
    async createBulkUsers(usersData) {
        try {
            const users = await User.bulkCreate(usersData)
            return users
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
    async updateBulkUsers(usersData){
        try {
            const updatedUsers = []
            for (const userdata of usersData) {
                const {id, ...updatedUserData} = userdata
                const [updatedCount] = await User.update(updatedUserData, { where: {id}})
                if (updatedCount === 1){
                    const user = await User.findByPk(id)
                    updatedUsers.push(user)
                }
            }
            return updatedUsers
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