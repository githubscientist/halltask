const mongoose = require('mongoose');

// Define the schema
const roomSchema = new mongoose.Schema({
    name: String,
    seats: Number,
    amenities: [String],
    price: Number
});

// Export the model
module.exports = mongoose.model('Room', roomSchema, 'rooms');