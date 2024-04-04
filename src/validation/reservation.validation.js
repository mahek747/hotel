const Joi = require('joi');

const reservationValidation = {
    createReservation: {
        body: Joi.object().keys({
            roomId: Joi.string().required(),
            userId: Joi.string().required(),
            checkInDate: Joi.date().iso().required(),
            checkOutDate: Joi.date().iso().required(),
            totalPrice: Joi.number().required(),
            status: Joi.string().valid('pending', 'confirmed', 'canceled').default('pending')
        })
    },
    updateReservation: {
        body: Joi.object().keys({
            roomId: Joi.string(),
            userId: Joi.string(),
            checkInDate: Joi.date().iso(),
            checkOutDate: Joi.date().iso(),
            totalPrice: Joi.number(),
            status: Joi.string().valid('pending', 'confirmed', 'canceled')
        })
    },
    getReservations: {
        query: Joi.object().keys({
            page: Joi.number().min(1),
            limit: Joi.number().min(1),
            search: Joi.string().trim()
        })
    },
    getReservationById: {
        params: Joi.object().keys({
            reservationId: Joi.string().required()
        })
    },
    deleteReservation: {
        params: Joi.object().keys({
            reservationId: Joi.string().required()
        })
    }
};

module.exports = reservationValidation;
