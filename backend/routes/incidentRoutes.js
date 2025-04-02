const express = require("express");
const Incident = require("../models/Incident");
const router = express.Router();

// Create a new incident (POST)
router.post("/", async (req, res) => {
  try {
    const { title, description, user_id, threat_id } = req.body;
    const newIncident = new Incident({ title, description, user_id, threat_id });
    await newIncident.save();
    res.status(201).json(newIncident);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get all incidents
router.get("/", async (req, res) => {
  try {
    const incidents = await Incident.find().populate("user_id", "name email");
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get incident by ID
router.get("/:id", async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id).populate("user_id", "name email");
    if (!incident) return res.status(404).json({ error: "Incident not found" });
    res.json(incident);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Update an incident by ID (PUT)
router.put("/:id", async (req, res) => {
  try {
    const updatedIncident = await Incident.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedIncident);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
