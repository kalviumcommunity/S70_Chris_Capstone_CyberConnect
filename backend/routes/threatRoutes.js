const express = require("express");
const Threat = require("../models/Threat");
const router = express.Router();

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

module.exports = router;
