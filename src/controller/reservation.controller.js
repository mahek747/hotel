const Reservation = require('../models/reservation.model');

const createReservation = async (reservationData) => {
    try {
        const newReservation = new Reservation(reservationData);
        await newReservation.save();
        return newReservation;
    } catch (error) {
        throw new Error('Failed to create reservation');
    }
}

const getAllReservations = async () => {
    try {
        const reservations = await Reservation.find();
        return reservations;
    } catch (error) {
        throw new Error('Failed to get reservations');
    }
}

const getReservationById = async (reservationId) => {
    try {
        const reservation = await Reservation.findById(reservationId);
        return reservation;
    } catch (error) {
        throw new Error('Failed to get reservation by ID');
    }
}

const updateReservation = async (reservationId, reservationData) => {
    try {
        await Reservation.findByIdAndUpdate(reservationId, reservationData);
        return true;
    } catch (error) {
        throw new Error('Failed to update reservation');
    }
}

const deleteReservation = async (reservationId) => {
    try {
        await Reservation.findByIdAndDelete(reservationId);
        return true;
    } catch (error) {
        throw new Error('Failed to delete reservation');
    }
}

module.exports = {
    createReservation,
    getAllReservations,
    getReservationById,
    updateReservation,
    deleteReservation
};
