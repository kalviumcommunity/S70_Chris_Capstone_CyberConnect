const express = require("express");
const ActivityLog = require("../models/ActivityLog");
const router = express.Router();

// Get activity logs
router.get("/:user_id", async (req, res) => {
  try {
    const logs = await ActivityLog.find({ user_id: req.params.user_id });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
