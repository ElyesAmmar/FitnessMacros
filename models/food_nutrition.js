const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/db");

const Food_Nutrition = sequelize.define('Food_Nutrition', {
    name_fr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calories: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fat: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    carbohydrates: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    starch: {
        type: DataTypes.STRING,
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
        type: DataTypes.INTEGER,
        allowNull: false
    },
    water: {
        type: DataTypes.INTEGER
    },
    alcohol: {
        type: DataTypes.STRING
    },
    vitamin_A_retinol: {
        type: DataTypes.STRING
    },
    beta_carotene_provitamin_A: {
        type: DataTypes.STRING
    },
    vitamin_C: {
        type: DataTypes.STRING
    },
    vitamin_D_cholecalciferol: {
        type: DataTypes.STRING
    },
    vitamin_E_tocopherol: {
        type: DataTypes.STRING
    },
    vitamin_K1: {
        type: DataTypes.STRING
    },
    vitamin_K2: {
        type: DataTypes.STRING
    },
    vitamin_B1_thiamine: {
        type: DataTypes.STRING
    },
    vitamin_B2_riboflavin: {
        type: DataTypes.STRING
    },
    vitamin_B3_niacin: {
        type: DataTypes.STRING
    },
    vitamin_B5_panthoneic_acid: {
        type: DataTypes.STRING
    },
    vitamin_B6: {
        type: DataTypes.STRING
    },
    vitamin_B9_folic_acid: {
        type: DataTypes.STRING
    },
    vitamin_B12_cobolamine: {
        type: DataTypes.STRING
    },
    calcium: {
        type: DataTypes.STRING
    },
    phosphorus: {
        type: DataTypes.STRING
    },
    magnesium: {
        type: DataTypes.STRING
    },
    potassium: {
        type: DataTypes.STRING
    },
    sodium_salt: {
        type: DataTypes.STRING
    },
    iron: {
        type: DataTypes.STRING
    },
    copper: {
        type: DataTypes.STRING
    },
    zinc: {
        type: DataTypes.STRING
    },
    manganese: {
        type: DataTypes.STRING
    },
    selenium: {
        type: DataTypes.STRING
    },
    iodine: {
        type: DataTypes.STRING
    },
    polyols: {
        type: DataTypes.STRING
    },
    organic_acids: {
        type: DataTypes.STRING
    }
});

module.exports = Food_Nutrition;