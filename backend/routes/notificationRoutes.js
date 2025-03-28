const express = require("express");
const Notification = require("../models/Notification");
const router = express.Router();

// Get notifications for a user
router.get("/:user_id", async (req, res) => {
  try {
    const notifications = await Notification.find({ user_id: req.params.user_id });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
