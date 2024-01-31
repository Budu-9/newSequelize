const express = require('express')
const app = express()

//middleware
app.use(express.json())


// routes 
const router = require('./routes/userRouter')
app.use('/', router)


// server 
app.listen(3000, () => {
    console.log('Server running...')
}) 