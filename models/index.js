const dbConfig = require('../config/db')
const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,

        define: {
            timestamps: false
        }
    }
    
)


//database authentication
sequelize.authenticate()
.then(() => {
    console.log('Database connection successful')
})
.catch(err => {
    console.log(err)
})


//initializing db
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


//initialize with table name
db.students = require('./userModel')(sequelize, DataTypes)


// models synchronization
db.sequelize.sync({ force:false })
.then(() => {
    console.log('sync successful')
})

module.exports = db