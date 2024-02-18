const { addUser, getOneUser, getAllUser } = require('../controllers/userController')
const db = require('../models')
const User = db.students

jest.mock('../models')

const req = {
    body: {
        first_name: 'anon',
        last_name: 'ghost',
        gender: 'male'
    }
}

const res = {
    status: jest.fn((x) => x),
    send: jest.fn((x) => x)
}

describe('user controller functions', () => {
    it('should send a status code of 200 when a user is added', async() => {

        User.create.mockResolvedValueOnce({
            first_name: 'anon',
            last_name: 'ghost',
            gender: 'male'
        })
    
        await addUser(req,res)
    
        expect(User.create).toHaveBeenCalledWith({
            first_name: 'anon',
            last_name: 'ghost',
            gender: 'male',
        })
        expect(res.status).toHaveBeenCalledWith(200)
        expect(req.body).toStrictEqual({
            first_name: "anon",
            last_name: "ghost",
            gender: "male"
        })
    })
    
    it('should send a status code 200 when one user is found', async() => {
        User.findOne.mockResolvedValueOnce({
            first_name: 'anon',
            last_name: 'ghost',
            gender: 'male'
        })
        await getOneUser(req,res)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(User.findOne).toHaveBeenCalledTimes(1)
    })
    
    it('should send a status code 200 when all users are found', async() => {

        const mockedUser = [
            {
                first_name: 'anon',
                last_name: 'ghost',
                gender: 'male'
            },
            
            {
                first_name: 'anon1',
                last_name: 'ghost1',
                gender: 'male'
            },
        ]
        User.findAll.mockResolvedValueOnce(mockedUser)
        await getAllUser(req,res)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(User.findAll).toHaveBeenCalledTimes(1)
    })
})







