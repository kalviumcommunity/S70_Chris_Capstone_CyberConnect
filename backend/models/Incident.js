const mongoose = require("mongoose");
const crypto = require("crypto");

const IncidentSchema = new mongoose.Schema({
  incident_id: { type: String, default: () => crypto.randomUUID(), unique: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // referencing User
  title: { type: String, required: true },
  description: { type: String, required: true },
  incident_type: { type: String, enum: ["phishing", "hacking", "scam", "data breach", "ransomware"], required: true },
  evidence: { type: String }, // File path or link
  status: { type: String, enum: ["pending", "under review", "resolved"], default: "pending" },
  reported_at: { type: Date, default: Date.now },
  verified_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Expert who verifies // referencing User
});

module.exports = mongoose.model("Incident", IncidentSchema);
