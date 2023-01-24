const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PictureSchema = new Schema({
  name: { type: String, required: true },
  src: { type: String, required: true },
});

module.exports = mongoose.model("Picture", PictureSchema);
