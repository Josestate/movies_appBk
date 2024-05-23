const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Director = require('./Directors');
const Actor = require('./Actors');
const Genre = require('./Genres');

const Movie = sequelize.define('movie', {
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.TEXT
    },
    synopsis: {
        type: DataTypes.TEXT
    },
    releaseYear: {
        type: DataTypes.INTEGER
    }
});

// Actor.belongsTo(Movie, { foreignKey: 'actorId' });
// Movie.hasMany(Actor, { foreignKey: 'actorId' });
// Genre.belongsTo(Movie, { foreignKey: 'genreId' });
// Movie.hasMany(Genre, { foreignKey: 'genreId' });
// Movie.belongsTo(Director, { foreignKey: 'directorId' });
// Director.hasMany(Movie, { foreignKey: 'directorId' });

module.exports = Movie;