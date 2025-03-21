const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.UUID, default: () => crypto.randomUUID(), unique: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password_hash: { type: String, required: true },
  role: { type: String, enum: ["user", "expert", "admin"], default: "user" },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
