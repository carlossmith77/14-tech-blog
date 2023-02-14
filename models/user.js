const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/config');


class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2]
        }
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'users'
})


module.exports = User;