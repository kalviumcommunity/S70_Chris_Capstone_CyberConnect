const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// Create a new notification (POST)
router.post("/", notificationController.createNotification);

// Get notifications for a user (GET)
// CHANGED: Added '/user' prefix to avoid conflict with the ID route below
router.get("/user/:user_id", notificationController.getUserNotifications);

// Fetch a specific notification by ID (GET)
router.get("/:id", notificationController.getNotificationById);

module.exports = router;