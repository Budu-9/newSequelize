const { addUser, getOneUser, getAllUser } = require('../controllers/userController')
const UserService = require('../services/userService')
const db = require('../models')
const User = db.students

jest.mock('../models')

describe('UserController', () => {
    describe('addUser', () => {
        it('should add a new user', async() => {
            //mock userdata
            const req = {
                body:{
                    first_name: 'anon',
                    last_name: 'ghost',
                    gender: 'male'
                }
            }

            const res = {
                status: jest.fn((x) => x),
                json: jest.fn()
            }

            //mock userService and methods
            const userService = new UserService()
            userService.createUser = jest.fn().mockResolvedValue({
                id_students: 1,
                first_name:'anon',
                last_name: 'ghost',
                gender: 'male'
            })

            //call addUser method
            await addUser(req,res)

            //check if User.create method was called with correct userData
            expect(userService.createUser).toHaveBeenCalledWith(req.body)
            //check if returned user matches the userData
            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.json).toHaveBeenCalledWith({
                id_students: 1,
                first_name:'anon',
                last_name: 'ghost',
                gender: 'male'
            })
        })

        it('should throw an error if user creation fails', async() => {
            //mock req and res
            const req = {
                body:{
                    first_name: 'anon',
                    last_name: 'ghost',
                    gender: 'male'
                }
            }

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            }
            //mock user methods to simulate error
            const userService = new UserService
            userService.createUser = jest.fn().mockRejectedValue(new Error('db error'))

            // call createUser and expect it to handle error
            await addUser(req,res)


            //call res.status and res.json were called properly
            expect(res.status).toHaveBeenCalledWith(500)
            expect(res.json).toHaveBeenCalledWith({error:'error creating user'})
            
        })
    })
})


// const req = {
//     body: {
//         first_name: 'anon',
//         last_name: 'ghost',
//         gender: 'male'
//     }
// }

// const res = {
//     status: jest.fn((x) => x),
//     send: jest.fn((x) => x)
// }

// describe('user controller functions', () => {
//     it('should send a status code of 200 when a user is added', async() => {

//         User.create.mockResolvedValueOnce({
//             first_name: 'anon',
//             last_name: 'ghost',
//             gender: 'male'
//         })
    
//         await addUser(req,res)
    
//         expect(User.create).toHaveBeenCalledWith({
//             first_name: 'anon',
//             last_name: 'ghost',
//             gender: 'male',
//         })
//         expect(res.status).toHaveBeenCalledWith(200)
//         expect(req.body).toStrictEqual({
//             first_name: "anon",
//             last_name: "ghost",
//             gender: "male"
//         })
//     })
    
//     it('should send a status code 200 when one user is found', async() => {
//         User.findOne.mockResolvedValueOnce({
//             first_name: 'anon',
//             last_name: 'ghost',
//             gender: 'male'
//         })
//         await getOneUser(req,res)
//         expect(res.status).toHaveBeenCalledWith(200)
//         expect(User.findOne).toHaveBeenCalledTimes(1)
//     })
    
//     it('should send a status code 200 when all users are found', async() => {

//         const mockedUser = [
//             {
//                 first_name: 'anon',
//                 last_name: 'ghost',
//                 gender: 'male'
//             },
            
//             {
//                 first_name: 'anon1',
//                 last_name: 'ghost1',
//                 gender: 'male'
//             },
//         ]
//         User.findAll.mockResolvedValueOnce(mockedUser)
//         await getAllUser(req,res)
//         expect(res.status).toHaveBeenCalledWith(200)
//         expect(User.findAll).toHaveBeenCalledTimes(1)
//     })
// })







