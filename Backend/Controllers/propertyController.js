// controllers/propertyController.js
const Property = require('../models/Property');
const cloudinary = require('../Config/cloudinaryConfig');
const fs = require('fs');


const uploadPhotosToCloudinary = async (files) => {
  try {
    if (!files || files.length === 0) {
      throw new Error('No files received for upload.');
    }

    const uploadPromises = files.map((file) => {
      const filePath = file.path;

      if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        throw new Error(`File not found: ${filePath}`);
      }

      return cloudinary.uploader.upload(filePath, { folder: 'properties' })
        .then((result) => {
          fs.unlinkSync(filePath); // Delete after upload
          return result.secure_url;
        });
    });

    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error('Cloudinary upload failed:', error.message);
    throw new Error('Cloudinary upload failed');
  }
};
const createProperty = async (req, res) => {
  try {
    console.log("Received files:", req.files); // Debugging line

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: 'No media files uploaded.' });
    }

    const photoUrls = await uploadPhotosToCloudinary(req.files);

    const property = new Property({
      media: photoUrls,
      adminInfo: JSON.parse(req.body.adminInfo),
      additionalInfo: JSON.parse(req.body.additionalInfo),
      floorInfo: JSON.parse(req.body.floorInfo),
      ownerInfo: JSON.parse(req.body.ownerInfo),
    });

    const savedProperty = await property.save();
    res.status(201).json({ success: true, data: savedProperty });
  } catch (error) {
    console.error("Error in createProperty:", error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json({ success: true, data: properties });
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
const deletePhotosFromCloudinary = async (urls) => {
  try {
    const deletePromises = urls.map((url) => {
      // Extract public ID from the Cloudinary URL
      const publicId = url.split('/').slice(-1)[0].split('.')[0];
      return cloudinary.uploader.destroy(`properties/${publicId}`);
    });

    return await Promise.all(deletePromises);
  } catch (error) {
    console.error('Error deleting photos from Cloudinary:', error.message);
    throw new Error('Cloudinary deletion failed');
  }
};
const deleteProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;

    // Find the property by ID
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ success: false, message: 'Property not found.' });
    }

    // Delete media files from Cloudinary
    if (property.media && property.media.length > 0) {
      await deletePhotosFromCloudinary(property.media);
    }

    // Delete property data from the database
    await Property.findByIdAndDelete(propertyId);

    res.status(200).json({ success: true, message: 'Property deleted successfully.' });
  } catch (error) {
    console.error('Error deleting property:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { createProperty, getProperties , deleteProperty };
