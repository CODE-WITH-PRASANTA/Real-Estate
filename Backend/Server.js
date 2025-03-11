const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db'); // Database connection
const bodyParser = require('body-parser');
const cors = require('cors');
const uploadRoutes = require("./routes/uploadRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const blogRoutes = require("./routes/blogRoutes");
const postpropertyRoutes = require('./routes/PostPropertyRoutes');


dotenv.config();
connectDB();

const app = express(); // ✅ Declare app first

// Middleware
app.use(express.json()); // ✅ This is required for parsing JSON data
app.use(express.urlencoded({ extended: true })); // ✅ This is required for parsing form data
app.use(cors());
app.use(bodyParser.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.use("/api/media", uploadRoutes);
app.use('/api', propertyRoutes);

app.use("/api/blogs", blogRoutes);
app.use('/api/properties', postpropertyRoutes);


// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
