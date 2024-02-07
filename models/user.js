const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/db");
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: "2000-07-10"
    },
    weigth: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    heigth: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    goal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activity: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Hash the password before saving
User.beforeCreate(async (user) => {
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);
  });

module.exports = User;