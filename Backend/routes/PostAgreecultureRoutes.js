const express = require("express");
const router = express.Router();
const upload = require("../Config/multer-config");
const {
  createAgricultureProperty,
  getAllAgricultureProperties,
  getAgriculturePropertyById,
  deleteAgricultureProperty,
  filterAgricultureProperties,
  updateAgricultureProperty,
  filterByBestValue
} = require("../Controllers/PostAgreecultureController");

// Create a new agriculture property
router.post(
  "/post-agriculture",
  upload.fields([{ name: "galleryImages", maxCount: 10 }, { name: "sellerPhoto", maxCount: 1 }]),
  createAgricultureProperty
);

// Get all agriculture properties
router.get("/agriculture-properties", getAllAgricultureProperties);

// Get an agriculture property by ID
router.get("/agriculture-property/:id", getAgriculturePropertyById);

// Delete an agriculture property by ID
router.delete("/agriculture-property/:id", deleteAgricultureProperty);

// Route for filtering agriculture properties
router.get("/filter-agriculture", filterAgricultureProperties);

router.patch("/agriculture-property/:id", updateAgricultureProperty);


// Route: Add a new route to filter properties by choosingBestValue
router.get("/filter-by-best-value", filterByBestValue);


module.exports = router;
