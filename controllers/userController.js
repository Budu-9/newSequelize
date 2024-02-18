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
    res.status(200)
    res.send(student)
}

// get all User 
const getAllUser = async (req,res) => {
    
    let students = await User.findAll()
    res.status(200)
    res.send(students)
}

//get one User
const getOneUser = async(req,res) => {
    
    let student = await User.findOne({where: { gender: "male" }})
    res.status(200)
    res.send(student)
}

// update User

const updateUser = async(req,res) =>{

    let id = req.params.id
    const user = await User.update(req.body, {where: { id: id }})

    res.status(200).send(user)
}


// delete User

const deleteUser = async (req,res) => {
    let id = req.params.id

    await User.destroy({ where: { id: id }})
    res.status(200).send('deletion successful')
}


module.exports = {
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser
}