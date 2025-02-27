const express = require("express");
const { createLink, getUserLinks } = require("../controllers/linkController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/", authMiddleware, createLink);
router.get("/", authMiddleware, getUserLinks);

module.exports = router;
