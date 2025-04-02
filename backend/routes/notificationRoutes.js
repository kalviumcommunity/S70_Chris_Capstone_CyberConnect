const express = require("express");
const Notification = require("../models/Notification");
const router = express.Router();

// Create a new notification (POST)
router.post("/", async (req, res) => {
  try {
    const { user_id, message, type } = req.body;
    const newNotification = new Notification({ user_id, message, type });
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get notifications for a user
router.get("/:user_id", async (req, res) => {
  try {
    const notifications = await Notification.find({ user_id: req.params.user_id });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Fetch a specific notification by ID (GET)
router.get("/:id", async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) return res.status(404).json({ error: "Notification not found" });
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
