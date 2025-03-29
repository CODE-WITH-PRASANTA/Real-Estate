const mongoose = require("mongoose");

const PostPropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  squareFeet: { type: String, required: true },
  propertyID: { type: String, required: true },
  propertyType: { type: String, required: true },
  garages: { type: String },
  yearBuilt: { type: String, required: true },
  landSize: { type: String, required: true },
  amenities: { type: [String] },
  nearby: {
    school: String,
    hospital: String,
    university: String,
    trainStation: String,
    groceryCenter: String,
    gymWellness: String,
    market: String,
    river: String
  },
  galleryImages: { type: [String], required: true }, // Storing Cloudinary URLs
  category: { type: String, enum: ["For Sale", "For Rent"], required: true },
  sellerName: { type: String, required: true },
  sellerEmail: { type: String, required: true },
  sellerPhone: { type: String, required: true },
  sellerPhoto: { type: String, required: true },
  youtubeLink: { type: String },


  choosingType: { type: String}, // New field
  choosingCategory: { type: String }, // New field
  puttingLocation: { type: String }, // New field
  choosingBestValue: { type: String }, // New field

}, { timestamps: true });

module.exports = mongoose.model("PostProperty", PostPropertySchema);
