const express = require("express");
const Threat = require("../models/Threat");
const router = express.Router();

// Create a new threat (POST)
router.post("/", async (req, res) => {
  try {
    const { title, description, severity, reportedBy } = req.body;
    const newThreat = new Threat({ title, description, severity, reportedBy });
    await newThreat.save();
    res.status(201).json(newThreat);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get all threats
router.get("/", async (req, res) => {
  try {
    const threats = await Threat.find();
    res.json(threats);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get threat by ID
router.get("/:id", async (req, res) => {
  try {
    const threat = await Threat.findById(req.params.id);
    if (!threat) return res.status(404).json({ error: "Threat not found" });
    res.json(threat);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Update a threat by ID (PUT)
router.put("/:id", async (req, res) => {
  try {
    const updatedThreat = await Threat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedThreat);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
