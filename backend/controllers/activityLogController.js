const ActivityLog = require("../models/ActivityLog");

// Create a new activity log
exports.createActivityLog = async (req, res) => {
  try {
    const { user_id, action, description, timestamp } = req.body;
    const newLog = new ActivityLog({ 
      user_id, 
      action, 
      description, 
      timestamp: timestamp || Date.now() 
    });
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Get activity logs for a specific user
exports.getUserActivityLogs = async (req, res) => {
  try {
    const logs = await ActivityLog.find({ user_id: req.params.user_id }).sort({ timestamp: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Update an activity log by ID
exports.updateActivityLog = async (req, res) => {
  try {
    const updatedLog = await ActivityLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLog);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};