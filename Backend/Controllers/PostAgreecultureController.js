const express = require("express");
const PostAgreeculture = require("../models/PostAgreeculture");
const cloudinary = require("../Config/cloudinaryConfig");

// Create a new agriculture property
exports.createAgricultureProperty = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Files:", req.files);

    const {
      title, description, price, location, squareFeet, propertyID, propertyType,
      pricePerSqFt, facingDirection, frontRoadWidth, boundaryWall, landSize,
      category, sellerName, sellerEmail, sellerPhone, youtubeLink, amenities, nearby
    } = req.body;

    // Check if property with the same propertyID already exists
    const existingProperty = await PostAgreeculture.findOne({ propertyID });
    if (existingProperty) {
      return res.status(400).json({ error: "Property with same propertyID already exists" });
    }

    // Upload gallery images to Cloudinary
    const galleryImages = [];
    if (req.files["galleryImages"]) {
      for (let file of req.files["galleryImages"]) {
        console.log("Uploading gallery image to Cloudinary:", file.path);
        const result = await cloudinary.uploader.upload(file.path);
        galleryImages.push(result.secure_url);
      }
    }

    // Upload seller photo to Cloudinary
    let sellerPhoto = "";
    if (req.files["sellerPhoto"]) {
      console.log("Uploading seller photo to Cloudinary:", req.files["sellerPhoto"][0].path);
      const result = await cloudinary.uploader.upload(req.files["sellerPhoto"][0].path);
      sellerPhoto = result.secure_url;
    }

    const newAgricultureProperty = new PostAgreeculture({
      title, description, price, location, squareFeet, propertyID, propertyType,
      pricePerSqFt, facingDirection, frontRoadWidth, boundaryWall, landSize,
      category, sellerName, sellerEmail, sellerPhone, youtubeLink, amenities,
      nearby, galleryImages, sellerPhoto
    });

    console.log("Saving agriculture property to the database...");
    await newAgricultureProperty.save();
    res.status(201).json({ message: "Agriculture Property Posted Successfully", property: newAgricultureProperty });
  } catch (error) {
    console.error("Error creating agriculture property:", error);
    res.status(500).json({ error: error.message });
  }
};
// Get all agriculture properties
exports.getAllAgricultureProperties = async (req, res) => {
  try {
    const properties = await PostAgreeculture.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: "Error fetching agriculture properties" });
  }
};
// Get agriculture property by ID
exports.getAgriculturePropertyById = async (req, res) => {
  try {
    const property = await PostAgreeculture.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: "Agriculture Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: "Error fetching agriculture property details" });
  }
};
// Delete agriculture property by ID
exports.deleteAgricultureProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProperty = await PostAgreeculture.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({ message: "Agriculture Property not found" });
    }
    res.json({ message: "Agriculture Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting agriculture property", error });
  }
};
// Filter agriculture properties
exports.filterAgricultureProperties = async (req, res) => {
  try {
    const { 
      choosingType, 
      choosingCategory, 
      puttingLocation, 
      propertyType, 
      location, 
      category 
    } = req.query;

    let query = {};

    if (choosingType) query.choosingType = { $regex: choosingType, $options: "i" };
    if (choosingCategory) query.choosingCategory = { $regex: choosingCategory, $options: "i" };
    if (puttingLocation) query.puttingLocation = { $regex: puttingLocation, $options: "i" };
    if (propertyType) query.propertyType = { $regex: propertyType, $options: "i" };
    if (location) query.location = { $regex: location, $options: "i" };
    if (category) query.category = { $regex: category, $options: "i" };
    const filteredProperties = await PostAgreeculture.find(query);
    res.status(200).json(filteredProperties);
  } catch (error) {
    console.error("Error filtering agriculture properties:", error);
    res.status(500).json({ message: "Error filtering agriculture properties", error: error.message });
  }
};
// Update agriculture property
exports.updateAgricultureProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      choosingType, 
      choosingCategory, 
      puttingLocation, 
      choosingBestValue 
    } = req.body;

    // Find the agriculture property by ID
    const property = await PostAgreeculture.findById(id);
    if (!property) {
      return res.status(404).json({ error: "Agriculture Property not found" });
    }
    if (choosingType) property.choosingType = choosingType;
    if (choosingCategory) property.choosingCategory = choosingCategory;
    if (puttingLocation) property.puttingLocation = puttingLocation;
    if (choosingBestValue) property.choosingBestValue = choosingBestValue;
    // Save the updated agriculture property
    await property.save();
    
    res.status(200).json({ message: "Agriculture Property updated successfully", updatedProperty: property });
  } catch (error) {
    console.error("Error updating agriculture property:", error);
    res.status(500).json({ error: "Error updating agriculture property" });
  }
};
// Controller: Add a new function to filter properties by choosingBestValue
exports.filterByBestValue = async (req, res) => {
  try {
    const { choosingBestValue } = req.query;
    if (!choosingBestValue) {
      return res.status(400).json({ error: "choosingBestValue is required" });
    }
    
    const properties = await PostAgreeculture.find({ 
      choosingBestValue: { $regex: choosingBestValue, $options: "i" } 
    });
    
    res.status(200).json(properties);
  } catch (error) {
    console.error("Error filtering properties by best value:", error);
    res.status(500).json({ message: "Error filtering properties", error: error.message });
  }
};
