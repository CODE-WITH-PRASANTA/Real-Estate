const express = require("express");
const PostProperty = require("../models/PostProperty");
const cloudinary = require("../Config/cloudinaryConfig");

// Create a new property
exports.createProperty = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Files:", req.files);

    const {
      title, description, price, location, bedrooms, bathrooms, squareFeet,
      propertyID, propertyType, garages, yearBuilt, landSize, amenities,
      nearby, category, sellerName, sellerEmail, sellerPhone, youtubeLink
    } = req.body;

    // Check if property with the same propertyID already exists
    const existingProperty = await PostProperty.findOne({ propertyID });
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

    const newProperty = new PostProperty({
      title, description, price, location, bedrooms, bathrooms, squareFeet,
      propertyID, propertyType, garages, yearBuilt, landSize, amenities,
      nearby, galleryImages, category, sellerName, sellerEmail, sellerPhone,
      sellerPhoto, youtubeLink
    });

    console.log("Saving property to the database...");
    await newProperty.save();
    res.status(201).json({ message: "Property Posted Successfully", property: newProperty });

  } catch (error) {
    console.error("Error creating property:", error);
    res.status(500).json({ error: error.message });
  }
};
// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await PostProperty.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: "Error fetching properties" });
  }
};
// Get property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await PostProperty.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: "Error fetching property details" });
  }
};
// Update property by ID
exports.updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      choosingType, choosingCategory, puttingLocation, choosingBestValue 
    } = req.body;

    // Find the property by ID
    const property = await PostProperty.findById(id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    if (choosingType) property.choosingType = choosingType;
    if (choosingCategory) property.choosingCategory = choosingCategory;
    if (puttingLocation) property.puttingLocation = puttingLocation;
    if (choosingBestValue) property.choosingBestValue = choosingBestValue;

    // Save the updated property
    await property.save();
    
    res.status(200).json({ message: "Property updated successfully", updatedProperty: property });
  } catch (error) {
    console.error("Error updating property:", error);
    res.status(500).json({ error: "Error updating property" });
  }
};
// Delete property by ID
exports.deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProperty = await PostProperty.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting property", error });
  }
};
exports.filterProperties = async (req, res) => {
  try {
    const { choosingType, choosingCategory, puttingLocation } = req.query;

    let query = {};
    if (choosingType) {
      query.choosingType = { $regex: choosingType, $options: "i" }; // Case-insensitive partial match
    }
    if (choosingCategory) {
      query.choosingCategory = { $regex: choosingCategory, $options: "i" };
    }
    if (puttingLocation) {
      query.puttingLocation = { $regex: puttingLocation, $options: "i" };
    }

    console.log("Filtering properties with query:", query);

    const filteredProperties = await PostProperty.find(query);
    res.status(200).json(filteredProperties);
  } catch (error) {
    console.error("Error filtering properties:", error);
    res.status(500).json({ message: "Error filtering properties", error: error.message });
  }
};
// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await PostProperty.distinct("choosingCategory");
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Error fetching categories" });
  }
};
