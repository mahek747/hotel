const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
        unique: true
    },
    floor: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'occupied', 'under maintenance'],
        default: 'available'
    },
    amenities: [{
        type: String
    }],
    pricePerNight: {
        type: Number,
        required: true
    }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
