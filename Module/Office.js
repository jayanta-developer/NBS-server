const mongoose = require("mongoose");

const OfficeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  Configuration:String,
  RERACarpetArea:String,
  ReadyToPosses:String,
  AveragePricepersqft:String,
  RERAID:String,
  amenities: [],
  map: {
    lat: Number,
    lng: Number,
  },
  images: [],
  address: {
    type: String,
    required: true,
  },
  meta_title: {
    type: String,
    required: true,
  },
  meta_description: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("Office", OfficeSchema);
