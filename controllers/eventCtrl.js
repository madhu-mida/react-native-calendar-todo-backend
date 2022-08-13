const Event = require('../models/event');

const index = async (req, res) => {
    try {
        res.status(200).json(await Event.find({}))
    } catch (error) {
        res.status(400).json(error);
    }
}

const create = async (req, res) => {
    try {
        res.status(200).json(await Event.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
}

const show = async (req, res) => {
    try {
        res.status(200).json(await Event.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        res.status(200).json(await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ))
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteEvent = async (req, res) => {
    try {
        res.status(200).json(await Event.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
}


module.exports = {
    index,
    delete: deleteEvent,
    update,
    create,
    show
}