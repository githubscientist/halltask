// import the model
const Room = require('../models/room');

// import mongoose
const mongoose = require('mongoose');

const roomController = {
    createRoom: async (req, res) => {
        const room = new Room(req.body);
        const createdRoom = await room.save();
        res.send(createdRoom);
    }
}

module.exports = roomController;