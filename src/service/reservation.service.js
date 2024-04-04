const { Reservation } = require("../models");

const createReservation = async (reservationData) => {
  return Reservation.create(reservationData);
}

const getAllReservations = async () => {
  return Reservation.find();
}

const deleteReservation = async (reservationId) => {
  return Reservation.findByIdAndDelete(reservationId);
}

const getReservationById = async (reservationId) => {
  return Reservation.findById(reservationId);
}

const updateReservation = async (reservationId, updateData) => {
  return Reservation.findByIdAndUpdate(reservationId, { $set: updateData });
}

module.exports = {
  createReservation,
  getAllReservations,
  deleteReservation,
  getReservationById,
  updateReservation
}
