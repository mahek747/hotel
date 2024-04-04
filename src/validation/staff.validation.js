const Joi = require('joi');

const createStaff = {
    body : Joi.object().keys({
        name : Joi.string().required().trim(),
        email : Joi.string().required().trim().email(),
        role : Joi.string().required().trim(),
        phoneNumber : Joi.string().required().trim(),
        address : Joi.string().required().trim(),
        joinedDate : Joi.string().required().trim(),
    }),
};

const getStaffList = {
    query : Joi.object().keys({
        search : Joi.string().required().trim(),
        sortBy : Joi.string().required().trim(),
        limit : Joi.string().required().trim(),
        page : Joi.string().required().trim()
    }),
};

module.exports = {
    createStaff,
    getStaffList
}
