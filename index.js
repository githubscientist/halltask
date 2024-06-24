// import mongoose
const mongoose = require('mongoose');

// import the MONGODB_URI from the config file
const { MONGODB_URI, PORT } = require('./utils/config');

// import the app
const app = require('./app');

console.log('Connecting to MongoDB...');

// connect to the database
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        // start the server
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}: http://localhost:${PORT}/`);
        })
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err.message);
    });