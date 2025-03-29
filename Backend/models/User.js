const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: { type: String, required: true, enum: ["Agent", "SubAgent"] },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  experience: { type: String, required: true },
  position: { type: String, required: true },
  businessArea: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  licenseNo: { type: String, default: "" },
  street: { type: String, required: true },
  additionalInfo: { type: String },
  zipCode: { type: String, required: true },
  place: { type: String, required: true },
  country: { type: String, required: true },
  phoneCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  acceptedTerms: { type: Boolean, required: true, default: false },
  approved: { type: Boolean, default: false }, // New Field for Approval
});

module.exports = mongoose.model("User", userSchema);
