const cloudinary = require("../Config/cloudinaryConfig");

// Upload handler
const uploadPhotos = async (req, res) => {
  try {
    // Process uploaded files
    const files = req.files.map((file) => ({
      url: file.path, // Cloudinary URL
      public_id: file.filename, // Cloudinary public_id
    }));

    res.status(200).json({
      success: true,
      message: "Photos uploaded successfully!",
      files,
    });
  } catch (error) {
    console.error("Error uploading photos:", error);
    res.status(500).json({
      success: false,
      message: "Upload failed!",
      error: error.message,
    });
  }
};
// Delete handler
const deletePhoto = async (req, res) => {
    const { publicId } = req.body; // Get the public_id from request body
    if (!publicId) {
      return res.status(400).json({ success: false, message: "Missing publicId" });
    }
  
    try {
      const result = await cloudinary.uploader.destroy(publicId); // Delete photo from Cloudinary
      if (result.result === "ok") {
        return res.status(200).json({
          success: true,
          message: "Photo deleted successfully!",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Failed to delete photo on Cloudinary.",
        });
      }
    } catch (error) {
      console.error("Error deleting photo:", error);
      res.status(500).json({
        success: false,
        message: "Delete failed!",
        error: error.message,
      });
    }
  };

module.exports = { uploadPhotos, deletePhoto };
