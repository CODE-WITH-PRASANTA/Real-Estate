const express = require("express");
const router = express.Router();
const { 
  createProperty, 
  getAllProperties, 
  getPropertyById, 
  getPropertiesByCategory 
} = require("../Controllers/PostPropertyController");
const upload = require("../Config/multer-config");

// Create a property
router.post(
  "/post-property",
  upload.fields([{ name: "galleryImages", maxCount: 10 }, { name: "sellerPhoto", maxCount: 1 }]),
  createProperty
);

// Get all properties
router.get("/properties", getAllProperties);

// Get a property by ID
router.get("/property/:id", getPropertyById);

// Get properties by category (For Sale / For Rent)
router.get("/properties/filter", getPropertiesByCategory);

module.exports = router;
