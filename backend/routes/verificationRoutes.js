const express = require("express");
const router = express.Router();
const verificationController = require("../controllers/verificationController");

// Create a new verification (POST)
router.post("/", verificationController.createVerification);

// Get all verifications (GET)
router.get("/", verificationController.getAllVerifications);

// Get verification by ID (GET)
router.get("/:id", verificationController.getVerificationById);

module.exports = router;