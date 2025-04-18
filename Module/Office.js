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
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  configuration:String,
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
 
  price:{
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("Office", OfficeSchema);
