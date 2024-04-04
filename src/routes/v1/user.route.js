const express = require("express");
const { userController } = require('../../controller');
const { userValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/user-data",
    validate(userValidation.createUser),
    userController.createUser
);

router.get(
    "/user-list",
    userController.getUserList
);

router.get(
    "/user-details/:userId",
    userController.getUserDetails
);

router.put(
    "/user-update/:userId",
    userController.updateUser
);

router.delete(
    "/delete-user/:userId",
    userController.deleteRecord
);

module.exports = router;