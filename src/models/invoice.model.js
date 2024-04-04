const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    reservationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid'],
        default: 'pending'
    },
    paymentDate: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
