const mongoose = require("mongoose");
const crypto = require("crypto");

const LocationSchema = new mongoose.Schema({
  location_id: { type: String, default: () => crypto.randomUUID(), unique: true },
  incident_id: { type: mongoose.Schema.Types.ObjectId, ref: "Incident", required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  city: { type: String },
  country: { type: String },
  reported_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Location", LocationSchema);

