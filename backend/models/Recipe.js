const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Recipe = sequelize.define('Recipe', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingredients: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    steps: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Recipe;
