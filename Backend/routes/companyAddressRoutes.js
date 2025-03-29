const express = require("express");
const router = express.Router();
const upload = require("../Config/multer-config");
const companyAddressController = require("../Controllers/companyAddressController");

// Create Address
router.post("/create", upload.single("photo"), companyAddressController.createAddress);

// Get All Addresses
router.get("/all", companyAddressController.getAddresses);

// Update Address
router.put("/update/:id", upload.single("photo"), companyAddressController.updateAddress);

// Delete Address
router.delete("/delete/:id", companyAddressController.deleteAddress);
module.exports = router;
