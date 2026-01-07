const express = require("express");
const router = express.Router();
const activityLogController = require("../controllers/activityLogController");

// Create a new activity log (POST)
router.post("/", activityLogController.createActivityLog);

// Get activity logs for a specific user (GET)
router.get("/:user_id", activityLogController.getUserActivityLogs);

// Update an activity log by ID (PUT)
router.put("/:id", activityLogController.updateActivityLog);

module.exports = router;