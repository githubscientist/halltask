// import express
const express = require('express');
const roomRouter = require('./routes/roomRoutes');

// create an express app
const app = express();

app.use(express.json());

app.use('/rooms', roomRouter);

// export the app
module.exports = app;