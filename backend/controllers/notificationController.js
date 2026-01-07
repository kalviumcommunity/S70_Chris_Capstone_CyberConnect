const Notification = require("../models/Notification");

// Create a new notification
exports.createNotification = async (req, res) => {
  try {
    const { user_id, message, type } = req.body;
    const newNotification = new Notification({ user_id, message, type });
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Get notifications for a specific user
exports.getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user_id: req.params.user_id });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Fetch a specific notification by ID
exports.getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) return res.status(404).json({ error: "Notification not found" });
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};