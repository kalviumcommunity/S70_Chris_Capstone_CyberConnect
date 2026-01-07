const express = require("express");
const router = express.Router();
const incidentController = require("../controllers/incidentController");

// Create a new incident (POST)
router.post("/", incidentController.createIncident);

// Get all incidents
router.get("/", incidentController.getAllIncidents);

// Get incident by ID
router.get("/:id", incidentController.getIncidentById);

// Update an incident by ID (PUT)
router.put("/:id", incidentController.updateIncident);

module.exports = router;