const mongoose = require("mongoose");
const CompanyAddress = require("../models/CompanyAddress");
const cloudinary = require("../Config/cloudinaryConfig");

// Helper function to extract publicId from Cloudinary URL
const getPublicId = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 1].split(".")[0]; // Extract the publicId without the file extension
};
// Create Address
exports.createAddress = async (req, res) => {
  try {
    const { address, properties } = req.body;
    let photoUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      photoUrl = result.secure_url;
    }

    const newAddress = new CompanyAddress({ photoUrl, address, properties });
    await newAddress.save();

    res.status(201).json({ message: "Address added successfully", newAddress });
  } catch (error) {
    res.status(500).json({ message: "Error adding address", error: error.message });
  }
};

// Get All Addresses
exports.getAddresses = async (req, res) => {
  try {
    const addresses = await CompanyAddress.find();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching addresses", error: error.message });
  }
};

// Update Address
exports.updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const existingAddress = await CompanyAddress.findById(id);

    if (!existingAddress) {
      return res.status(404).json({ message: "Address not found" });
    }

    let { address, properties } = req.body;
    let updatedData = { address, properties };

    if (req.file) {
      // Delete previous image from Cloudinary
      if (existingAddress.photoUrl) {
        const publicId = getPublicId(existingAddress.photoUrl);
        await cloudinary.uploader.destroy(publicId);
      }

      // Upload new image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      updatedData.photoUrl = result.secure_url;
    }

    const updatedAddress = await CompanyAddress.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json({ message: "Address updated successfully", updatedAddress });
  } catch (error) {
    res.status(500).json({ message: "Error updating address", error: error.message });
  }
};
// Delete Address
exports.deleteAddress = async (req, res) => {
    try {
      const { id } = req.params;
      const existingAddress = await CompanyAddress.findById(id);
  
      if (!existingAddress) {
        return res.status(404).json({ message: "Address not found" });
      }
  
      // Delete image from Cloudinary
      if (existingAddress.photoUrl) {
        const publicId = getPublicId(existingAddress.photoUrl);
        await cloudinary.uploader.destroy(publicId);
      }
  
      // Delete address from database
      await CompanyAddress.findByIdAndDelete(id);
  
      res.status(200).json({ message: "Address deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting address" });
    }
  };