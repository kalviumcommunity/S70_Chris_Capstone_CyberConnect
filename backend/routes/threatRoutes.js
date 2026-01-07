const express = require("express");
const router = express.Router();
const threatController = require("../controllers/threatController");

// Create a new threat (POST)
router.post("/", threatController.createThreat);

// Get all threats (GET)
router.get("/", threatController.getAllThreats);

// Get threat by ID (GET)
router.get("/:id", threatController.getThreatById);

// Update a threat by ID (PUT)
router.put("/:id", threatController.updateThreat);

module.exports = router;