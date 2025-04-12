const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  image: String,
  phone: String,
  role: {
    type: String,
    required: true,
    enum: ["user", "agent"],
  },
});

module.exports = mongoose.model("Agent", AgentSchema);
