const db = require('../models')

// main model
const User = db.students

// create User
const addUser = async(req,res) => {
    let info = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender
    }

    const student = await User.create(info)
    res.status(200).send(student)
}

// get all User 
const getAllUser = async (req,res) => {
    
    let students = await User.findAll({})
    res.status(200).send(students)
}

//get one User
const getOneUser = async(req,res) => {
    let id =req.params.id
    let student = await User.findOne()
    res.status(200).send(student)
}

module.exports = {
    addUser,
    getAllUser,
    getOneUser
}