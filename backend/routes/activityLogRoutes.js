const express = require("express");
const ActivityLog = require("../models/ActivityLog");
const router = express.Router();

// Create a new activity log (POST)
router.post("/", async (req, res) => {
  try {
    const { user_id, action, description, timestamp } = req.body;
    const newLog = new ActivityLog({ user_id, action, description, timestamp: timestamp || Date.now() });
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get activity logs for a specific user (GET)
router.get("/:user_id", async (req, res) => {
  try {
    const logs = await ActivityLog.find({ user_id: req.params.user_id }).sort({ timestamp: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Update an activity log by ID (PUT)
router.put("/:id", async (req, res) => {
  try {
    const updatedLog = await ActivityLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLog);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});


module.exports = router;
