const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Movie = require('./Movies');

const Genre = sequelize.define('genre', {
    name: {
        type: DataTypes.STRING
    },
});


// Genre.belongsTo(Movie, { through: 'genreId' });

module.exports = Genre;