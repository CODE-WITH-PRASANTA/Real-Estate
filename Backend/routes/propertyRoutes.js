// routes/propertyRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../Config/multer-config');
const { createProperty , getProperties , deleteProperty } = require('../Controllers/propertyController');

router.post(
  '/properties',
  upload.array('media', 10), // Accept up to 10 files
  (req, res, next) => {
    console.log("Received files:", req.files); // Debugging step
    next();
  },
  createProperty
);


router.get('/view', getProperties); // New route to get properties
router.delete('/view/:id', deleteProperty);




module.exports = router;
