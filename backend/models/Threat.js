const mongoose = require("mongoose");
const crypto = require("crypto");

const ThreatSchema = new mongoose.Schema({
  threat_id: { type: String, default: () => crypto.randomUUID(), unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  threat_type: { type: String, enum: ["phishing", "malware", "ransomware", "DDoS", "scam", "data breach"], required: true },
  source: { type: String },
  severity: { type: String, enum: ["low", "medium", "high", "critical"], required: true },
  reported_at: { type: Date, default: Date.now },
  status: { type: String, enum: ["active", "resolved"], default: "active" },
});

module.exports = mongoose.model("Threat", ThreatSchema);

