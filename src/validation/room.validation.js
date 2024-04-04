const Joi = require('joi');

const roomValidation = {
    createRoom: {
        body: Joi.object().keys({
            roomNumber: Joi.string().required().trim(),
            floor: Joi.number().required(),
            capacity: Joi.number().required(),
            status: Joi.string().valid('available', 'occupied', 'under maintenance'),
            amenities: Joi.array().items(Joi.string()),
            pricePerNight: Joi.number().required()
        })
    },
    updateRoom: {
        body: Joi.object().keys({
            roomNumber: Joi.string().trim(),
            floor: Joi.number(),
            capacity: Joi.number(),
            status: Joi.string().valid('available', 'occupied', 'under maintenance'),
            amenities: Joi.array().items(Joi.string()),
            pricePerNight: Joi.number()
        })
    },
    getRooms: {
        query: Joi.object().keys({
            page: Joi.number().min(1),
            limit: Joi.number().min(1),
            search: Joi.string().trim()
        })
    },
    getRoomById: {
        params: Joi.object().keys({
            roomId: Joi.string().required()
        })
    },
    deleteRoom: {
        params: Joi.object().keys({
            roomId: Joi.string().required()
        })
    }
};

module.exports = roomValidation;
