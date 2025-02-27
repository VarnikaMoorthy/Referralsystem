const express = require("express");
const referralController = require("../controllers/referralController");
const router = express.Router();

router.get("/", referralController.getReferrals);
module.exports = router;