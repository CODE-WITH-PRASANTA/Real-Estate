const express = require("express");
const upload = require("../Config/multer-config");
const { uploadPhotos, deletePhoto } = require("../Controllers/uploadController");

const router = express.Router();

// Route for uploading photos
router.post("/upload", upload.array("photos", 10), uploadPhotos);

// Route for deleting photos
router.delete("/delete", deletePhoto);

module.exports = router;
