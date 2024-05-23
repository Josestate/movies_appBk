const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Movie = require('./Movies');

const Actor = sequelize.define('actor', {
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

// Actor.belongsToMany(Movie, { through: 'MovieActor' });

module.exports = Actor;