const Joi = require('joi');

const invoiceValidation = {
    createInvoice: {
        body: Joi.object().keys({
            reservationId: Joi.string().required(),
            userId: Joi.string().required(),
            amount: Joi.number().required(),
            paymentStatus: Joi.string().valid('pending', 'paid').default('pending'),
            paymentDate: Joi.date().iso()
        })
    },
    updateInvoice: {
        body: Joi.object().keys({
            reservationId: Joi.string(),
            userId: Joi.string(),
            amount: Joi.number(),
            paymentStatus: Joi.string().valid('pending', 'paid'),
            paymentDate: Joi.date().iso()
        })
    },
    getInvoices: {
        query: Joi.object().keys({
            page: Joi.number().min(1),
            limit: Joi.number().min(1),
            search: Joi.string().trim()
        })
    },
    getInvoiceById: {
        params: Joi.object().keys({
            invoiceId: Joi.string().required()
        })
    },
    deleteInvoice: {
        params: Joi.object().keys({
            invoiceId: Joi.string().required()
        })
    }
};

module.exports = invoiceValidation;
