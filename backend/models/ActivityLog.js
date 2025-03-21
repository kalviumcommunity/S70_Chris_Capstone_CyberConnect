const mongoose = require("mongoose");
const crypto = require("crypto");

const ActivityLogSchema = new mongoose.Schema({
  log_id: { type: String, default: () => crypto.randomUUID(), unique: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  action: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ActivityLog", ActivityLogSchema);
