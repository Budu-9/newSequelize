module.exports = ( sequelize, DataTypes ) => {

    const User = sequelize.define('students', {
        id_students: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
    
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
    
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
    
        }
    })

    return User
}