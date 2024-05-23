const express = require('express');
const router = express.Router();
moviesRouter = require('./movies.router');
actorsRouter = require('./actors.router');
directorsRouter = require('./directors.router');
genresRouter = require('./genres.router');

router.use(moviesRouter);
router.use(actorsRouter);
router.use(directorsRouter);
router.use(genresRouter);

module.exports = router;