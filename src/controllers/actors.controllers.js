const catchError = require('../utils/catchError');
const Actor = require('../models/Actors');
const Movie = require('../models/Movies');

const getAll = catchError(async(req, res) => {
    const actors = await Actor.findAll({ include: [Movie]});
    return res.json(actors);
});

const create = catchError(async(req, res) => {
    const actor = await Actor.create(req.body);
    return res.status(201).json(actor);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const actor = await Actor.findByPk(id);
    if(!actor) return res.sendStatus(404);
    return res.json(actor);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Actor.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const actor = await Actor.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(actor[0] === 0) return res.sendStatus(404);
    return res.json(actor[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}