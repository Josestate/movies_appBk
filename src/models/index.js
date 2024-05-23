const Actor = require('./Actors');
const Director = require('./Directors');
const Genre = require('./Genres');
const Movie = require('./Movies');

Movie.belongsToMany(Actor, { through: 'movies_actors' });
Actor.belongsToMany(Movie, { through: 'movies_actors' });

Movie.belongsToMany(Director, { through: 'movies_directors' });
Director.belongsToMany(Movie, { through: 'movies_directors' });

Movie.belongsToMany(Genre, { through: 'movies_genres' });
Genre.belongsToMany(Movie, { through: 'movies_genres' });
