const mongoose = require("mongoose");
const crypto = require("crypto");

const CommentSchema = new mongoose.Schema({
  comment_id: { type: String, default: () => crypto.randomUUID(), unique: true },
  incident_id: { type: mongoose.Schema.Types.ObjectId, ref: "Incident", required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  comment_text: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", CommentSchema);
