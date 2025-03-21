const mongoose = require("mongoose");
const crypto = require("crypto");

const AIAnalysisSchema = new mongoose.Schema({
  analysis_id: { type: String, default: () => crypto.randomUUID(), unique: true },
  threat_id: { type: mongoose.Schema.Types.ObjectId, ref: "Threat", required: true },
  ai_prediction: { type: String, required: true },
  confidence_score: { type: Number, required: true }, // 0-100%
  analyzed_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AIAnalysis", AIAnalysisSchema);
