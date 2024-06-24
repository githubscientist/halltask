const express = require('express');
const { createRoom } = require('../controllers/roomController');

const roomRouter = express.Router();

roomRouter.post('/', createRoom);

module.exports = roomRouter;