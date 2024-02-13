const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/db");

const Food = sequelize.define('Food', {
    name_fr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name_en: {
        type: DataTypes.STRING,
        allowNull: false
    },
    serving_size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    serving_size_fr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calories: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fat: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    trans_fat: {
        type: DataTypes.STRING
    },
    saturated_fat: {
        type: DataTypes.STRING
    },
    monounsaturated_fat: {
        type: DataTypes.STRING
    },
    polyunsaturated_fat: {
        type: DataTypes.STRING
    },
    cholesterol: {
        type: DataTypes.STRING
    },
    sodium: {
        type: DataTypes.STRING
    },
    carbohydrates: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    dietary_fiber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sugars: {
        type: DataTypes.STRING,
        allowNull: false
    },
    protein: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    vitamin_a: {
        type: DataTypes.STRING
    },
    vitamin_c: {
        type: DataTypes.STRING
    },
    vitamin_d: {
        type: DataTypes.STRING
    },
    calcium: {
        type: DataTypes.STRING
    },
    potassium: {
        type: DataTypes.STRING
    },
    iron: {
        type: DataTypes.STRING
    },
    serving_size_100: {
        type: DataTypes.STRING,
        allowNull: false   
    },
    calories_100: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fat_100: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    trans_fat_100: {
        type: DataTypes.STRING
    },
    saturated_fat_100: {
        type: DataTypes.STRING
    },
    monounsaturated_fat_100: {
        type: DataTypes.STRING
    },
    polyunsaturated_fat_100: {
        type: DataTypes.STRING
    },
    cholesterol_100: {
        type: DataTypes.STRING
    },
    sodium_100: {
        type: DataTypes.STRING
    },
    carbohydrates_100: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    dietary_fiber_100: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sugars_100: {
        type: DataTypes.STRING,
        allowNull: false
    },
    protein_100: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    vitamin_a_100: {
        type: DataTypes.STRING
    },
    vitamin_c_100: {
        type: DataTypes.STRING
    },
    vitamin_d_100: {
        type: DataTypes.STRING
    },
    calcium_100: {
        type: DataTypes.STRING
    },
    potassium_100: {
        type: DataTypes.STRING
    },
    iron_100: {
        type: DataTypes.STRING
    }
});

module.exports = Food;