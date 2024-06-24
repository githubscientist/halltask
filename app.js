// import express
const express = require('express');

// create an express app
const app = express();

// import mongoose
const mongoose = require('mongoose');

// import the model
const Room = require('./models/room');
const Booking = require('./models/booking');

app.use(express.json());

app.post('/rooms', async (req, res) => {
    const room = new Room(req.body);
    const createdRoom = await room.save();
    res.send(createdRoom);
});

// export the app
module.exports = app;