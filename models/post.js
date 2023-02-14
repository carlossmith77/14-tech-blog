const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/config');


class Post extends Model {}
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2]
        }
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    }, 
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false,
        
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts'
})


module.exports = Post;