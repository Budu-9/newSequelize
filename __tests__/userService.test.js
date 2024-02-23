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
    
            //mock model
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
})

