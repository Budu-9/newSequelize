const UserService = require('../services/userService')


describe('userService', () => {
    describe('createUser', () => {
        it('should create a new user', async () => {
            //mock userdata
            const userData = {
                first_name: 'anon',
                last_name: 'ghost',
                gender: 'male'
            }
    
            //mock model methods
            const createMock = jest.fn(() => Promise.resolve(userData))
            const MockUser = jest.fn(() => ({create: createMock}))

            //create mock instance of UserService
            const userService = new UserService()
            userService.User = MockUser

            //call createUser method
            const user = await userService.createUser(userData)
    
            expect(createMock).toHaveBeenCalledWith(userData)
            expect(user).toEqual(userData)
        })
    
        it('should throw an error if user creation fails', async() => {
            //mock userData
            const userData = {
                first_name: 'anon',
                last_name: 'ghost',
                gender: 'male'
            }
    
            // mock user model to simulate error
            const createMock = jest.fn(() => { throw new Error('db error')})
            const MockUser = jest.fn(() => ({create: createMock}))

            //create mock instance of Userservice
            const userService = new UserService() 
            userService.User = MockUser
    
            // call createUser method and expect an error
            await expect(userService.createUser(userData)).rejects.toThrow('error creating user')
        })
    })
    
    describe('getUserById', () => {
        it('should find a single user', async() => {
            //mock userData
            const userData = {
                id_students: 11,
                first_name: 'anon' ,
                last_name: 'ghost',
                gender: 'male'
            }

            //mock model methods
            const getMock = jest.fn(() => Promise.resolve(userData))
            const MockUser = jest.fn(() => ({find: getMock}))

            //create mock instance of userService
            const userService = new UserService()
            userService.User = MockUser

            // call findUser method
            const user = await userService.getUserById(userData)

            expect(getMock).toHaveBeenCalledWith(userData)
            expect(user).toHaveBeenCalledTimes(1)
        })

        it('should throw an error if find single user fails', async() => {
            //mock userData
            const userData = {
                first_name: 'anon',
                last_name: 'ghost',
                gender: 'male'
            }

            // mock user model to simulate error
            const getMock = jest.fn(() => { throw new Error('db error')})
            const MockUser = jest.fn(() => ({find: getMock}))

            //create mock instance of Userservice
            const userService = new UserService() 
            userService.User = MockUser

            // call createUser method and expect an error
            await expect(userService.getUserById(userData)).rejects.toThrow('error getting user')
        })
    })

    describe('getAllUser', () => {
        it('should get a single user', async () => {
            //mock userdata
            const userData = {
                first_name: 'anon',
                last_name: 'ghost',
                gender: 'male'
            }
    
            //mock model methods
            const getMock = jest.fn(() => Promise.resolve(userData))
            const MockUser = jest.fn(() => ({get: getMock}))

            //create mock instance of UserService
            const userService = new UserService()
            userService.User = MockUser

            //call createUser method
            const user = await userService.findAll(userData)
    
            expect(getMock).toHaveBeenCalledWith(userData)
            expect(user).toHaveBeenCalledTimes(1)
        })
    
        it('should throw an error if user creation fails', async() => {
            //mock userData
            const userData = {
                first_name: 'anon',
                last_name: 'ghost',
                gender: 'male'
            }
    
            // mock user model to simulate error
            const getMock = jest.fn(() => { throw new Error('db error')})
            const MockUser = jest.fn(() => ({get: getMock}))

            //create mock instance of Userservice
            const userService = new UserService() 
            userService.User = MockUser
    
            // call createUser method and expect an error
            await expect(userService.getAllUser(userData)).rejects.toThrow('error getting users')
        })
    })
})

