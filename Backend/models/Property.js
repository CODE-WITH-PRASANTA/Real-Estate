// models/Property.js
const mongoose = require('mongoose');

const FloorSchema = new mongoose.Schema({
  floorNumber: String,
  price: Number,
  postfix: String,
  size: Number,
  kitchen: String,
  bedrooms: Number,
  bathrooms: Number,
  imageUrl: String,
  about: String,
});

const PropertySchema = new mongoose.Schema({
  media: [String], // Array of image URLs
  adminInfo: {
    title: String,
    description: String,
    address: String,
    zipCode: String,
    country: String,
    province: String,
    location: String,
    neighborhood: String,
  },
  additionalInfo: {
    price: Number,
    negotiation: String,
    beforePriceLabel: String,
    afterPriceLabel: String,
    propertyType: String,
    propertyStatus: String,
    propertyLabel: String,
    propertyId: String,
    size: String,
    landArea: String,
    rooms: String,
    bedrooms: String,
    bathrooms: String,
    garages: String,
    garageSize: String,
    yearBuilt: String,
  },

  floorInfo: [FloorSchema],
  
  ownerInfo: {
    name: String,
    phoneNo: String,
    secondPhoneNo: String,
    email: String,
    address: String,
    state: String,
    pin: String,
    landmark: String,
    moreContactDetails: String,
    talkingTime: String,
  },
});

module.exports = mongoose.model('Property', PropertySchema);
