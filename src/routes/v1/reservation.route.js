const express = require("express");
const { reservationController } = require('../../controller');
const { reservationValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/reservation-data",
    validate(reservationValidation.createReservation),
    reservationController.createReservation
);

router.get(
    "/reservation-list",
    reservationController.getAllReservations
);

router.get(
    "/reservation-details/:reservationId",
    reservationController.getReservationById
);

router.put(
    "/reservation-update/:reservationId",
    reservationController.updateReservation
);

router.delete(
    "/delete-reservation/:reservationId",
    reservationController.deleteReservation
);

module.exports = router;
