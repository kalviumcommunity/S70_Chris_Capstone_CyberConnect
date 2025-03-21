const mongoose = require("mongoose");
const crypto = require("crypto");

const VerificationSchema = new mongoose.Schema({
  verification_id: { type: String, default: () => crypto.randomUUID(), unique: true },
  incident_id: { type: mongoose.Schema.Types.ObjectId, ref: "Incident", required: true },
  expert_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  comments: { type: String, required: true },
  verification_status: { type: String, enum: ["valid", "false report", "needs more info"], required: true },
  verified_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Verification", VerificationSchema);
