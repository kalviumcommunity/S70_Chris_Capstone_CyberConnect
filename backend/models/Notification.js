const mongoose = require("mongoose");
const crypto = require("crypto");

const NotificationSchema = new mongoose.Schema({
  notification_id: { type: String, default: () => crypto.randomUUID(), unique: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  read_status: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notification", NotificationSchema);
