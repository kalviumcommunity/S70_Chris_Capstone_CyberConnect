const express = require("express");
const Incident = require("../models/Incident");
const router = express.Router();

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

module.exports = router;
