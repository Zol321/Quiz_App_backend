const mongoose = require("mongoose");

const factSchema = new mongoose.Schema({
  Date: { type: Date, default: Date.now() },
  userId: String,
  fact: String,
  title: String,
  likes: [],
  dislikes: [],
});

const factModel = mongoose.model("Facts", factSchema);
module.exports = factModel;





