const mongoose = require("mongoose");

const CompanyAddressSchema = new mongoose.Schema({
  photoUrl: { type: String, required: true },
  address: { type: String, required: true },
  properties: { type: Number, required: true },
});

const CompanyAddress = mongoose.model("CompanyAddress", CompanyAddressSchema);
module.exports = CompanyAddress;
