const express = require("express");
const { invoiceController } = require('../../controller');
const { invoiceValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/invoice-data",
    validate(invoiceValidation.createInvoice),
    invoiceController.createInvoice
);

router.get(
    "/invoice-list",
    invoiceController.getAllInvoices
);

router.get(
    "/invoice-details/:invoiceId",
    invoiceController.getInvoiceById
);

router.put(
    "/invoice-update/:invoiceId",
    invoiceController.updateInvoice
);

router.delete(
    "/delete-invoice/:invoiceId",
    invoiceController.deleteInvoice
);

module.exports = router;
