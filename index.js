const express = require('express')
const app = express()
const router = require('./routes/userRouter')


//middleware
app.use(express.json())


// Settings to parse body of a POST request
app.use(express.urlencoded({ extended: true }))

// routes 
app.use('/', router)


// server 
app.listen(3000, () => {
    console.log('Server running...')
}) 

//module.exports = app