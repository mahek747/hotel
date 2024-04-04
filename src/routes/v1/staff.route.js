const express = require("express");
const { staffController } = require('../../controller');
const { staffValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/staff-data",
    validate(staffValidation.createStaff),
    staffController.createStaff
);

router.get(
    "/staff-list",
    staffController.getStaffList
);

router.get(
    "/staff-details/:staffId",
    staffController.getStaffDetails
);

router.put(
    "/staff-update/:staffId",
    staffController.updateStaff
);

router.delete(
    "/delete-staff/:staffId",
    staffController.deleteStaff
);

module.exports = router;
