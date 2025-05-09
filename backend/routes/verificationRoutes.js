const express = require("express");
const Verification = require("../models/Verification");
const router = express.Router();

// Create a new verification (POST)
router.post("/", async (req, res) => {
  try {
    const { incident_id, expert_id, status, comments } = req.body;
    const newVerification = new Verification({ incident_id, expert_id, status, comments });
    await newVerification.save();
    res.status(201).json(newVerification);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get all verifications
router.get("/", async (req, res) => {
  try {
    const verifications = await Verification.find().populate("incident_id expert_id", "title name");
    res.json(verifications);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get verification by ID
router.get("/:id", async (req, res) => {
  try {
    const verification = await Verification.findById(req.params.id).populate("incident_id expert_id", "title name");
    if (!verification) return res.status(404).json({ error: "Verification not found" });
    res.json(verification);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
