const express = require("express");
const router = express.Router();
const upload = require("../Config/multer-config");
const { 
  createProperty, 
  getAllProperties, 
  getPropertyById, 
  updateProperty, 
  deleteProperty ,
  filterProperties,
  getCategories
} = require("../Controllers/PostPropertyController");

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

// Update property by ID
router.put("/properties/:id", updateProperty);

// Delete property by ID
router.delete("/properties/:id", deleteProperty);

// Route for filtering properties
router.get("/filter", filterProperties);


// Get all categories
router.get("/categories", getCategories);




module.exports = router;
