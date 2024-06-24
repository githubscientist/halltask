const mongoose = require('mongoose');
const { create } = require('./room');

// Define the schema
const bookingSchema = new mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    customer: String,
    date: Date,
    startTime: Number,
    endTime: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'confirmed'
    }
});

// Export the model
module.exports = mongoose.model('Booking', bookingSchema, 'bookings');