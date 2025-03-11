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

    // Check if property with same propertyID already exists
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

// Get properties by category (For Sale / For Rent)
exports.getPropertiesByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    if (!category || !["For Sale", "For Rent"].includes(category)) {
      return res.status(400).json({ error: "Invalid or missing category" });
    }

    const properties = await PostProperty.find({ category });
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: "Error filtering properties" });
  }
};
