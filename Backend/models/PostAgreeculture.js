const mongoose = require("mongoose");

const PostAgreecultureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  squareFeet: { type: Number, required: true },
  propertyID: { type: String, required: true, unique: true },
  propertyType: { type: String, enum: ["Plot", "Land"], required: true },
  pricePerSqFt: { type: Number, required: true },
  facingDirection: { type: String, enum: ["East", "West", "North", "South"], required: true },
  frontRoadWidth: { type: String, required: true },
  boundaryWall: { type: String, enum: ["Yes", "No"], required: true },
  landSize: { type: String, required: true },
  category: { type: String, enum: ["Already Verified", "To be Verified"], required: true },
  sellerName: { type: String, required: true },
  sellerEmail: { type: String, required: true },
  sellerPhone: { type: String, required: true },
  youtubeLink: { type: String },
  amenities: { type: [String] },
  nearby: {
    school: { type: String },
    hospital: { type: String },
    university: { type: String },
    trainStation: { type: String },
    groceryCenter: { type: String },
    gymWellness: { type: String },
    market: { type: String },
    river: { type: String }
  },
  galleryImages: { type: [String], required: true },
  sellerPhoto: { type: String, required: true },

  choosingType: { type: String },
  choosingCategory: { type: String },
  puttingLocation: { type: String },
  choosingBestValue: { type: String }

}, { timestamps: true });

module.exports = mongoose.model("PostAgreeculture", PostAgreecultureSchema);
