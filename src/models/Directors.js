const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Movie = require('./Movies');

const Director = sequelize.define('director', {
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    nationality: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    birthday: {
        type: DataTypes.DATE
    }
});

// Director.hasMany(Movie, { foreignKey: 'directorId' });

module.exports = Director;