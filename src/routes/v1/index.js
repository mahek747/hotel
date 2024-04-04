const express = require("express");

const userRoute = require("./user.route");
const invoiceRoute = require("./invoice.route");
const reservationRoute = require("./reservation.route");
const roomRoute = require("./room.route");
const staffRoute = require("./staff.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/invoice", invoiceRoute);
router.use("/reservation", reservationRoute);
router.use("/room", roomRoute);
router.use("/staff", staffRoute);

module.exports = router;