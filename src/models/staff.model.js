const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['manager', 'supervisor', 'staff'],
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    joinedDate: {
        type: Date,
        default: Date.now
    }
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
