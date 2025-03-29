const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  profilePic: { type: String, required: true },
  role: { type: String, enum: ["Agent", "Subagent"], required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Agent", AgentSchema);