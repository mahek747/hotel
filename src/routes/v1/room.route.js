const express = require("express");
const { roomController } = require('../../controller');
const { roomValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/room-data",
    validate(roomValidation.createRoom),
    roomController.createRoom
);

router.get(
    "/room-list",
    roomController.getAllRooms
);

router.get(
    "/room-details/:roomId",
    roomController.getRoomById
);

router.put(
    "/room-update/:roomId",
    roomController.updateRoom
);

router.delete(
    "/delete-room/:roomId",
    roomController.deleteRoom
);

module.exports = router;
