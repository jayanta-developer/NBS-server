const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summery: {
    type: String,
    required: true,
  },
  images: [
    {
      image: {
        type: String,
        required: true,
      },
      altText: {
        type: String,
        required: true,
      },
      imgId: {
        type: String,
        // required: true,
      },
    },
  ],
  city: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  map: {
    lat: String,
    lng: String,
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
  amenities: [
    {
      type: String,
      required: true,
    },
  ],
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
  listingId: {
    type: String,
    required: true,
  },
  buildingArea: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Property", PropertySchema);
