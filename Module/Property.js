const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  images: [],
  city: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  map: {
    lat: Number,
    lng: Number,
  },
  price: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  bath: {
    type: String,
    required: true,
  },
  area: {
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
  rating: {
    type: Number,
    required: true,
  },
  amenities: [],
  propertyType: {
    type: String,
    required: true,
  },
  foolrSize: {
    type: String,
    required: true,
  },
  listedOn: {
    type: String,
    required: true,
  },
  buildingArea: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
 
});

module.exports = mongoose.model("Property", PropertySchema);
