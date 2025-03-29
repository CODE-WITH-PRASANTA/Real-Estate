const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db'); // Database connection
const bodyParser = require('body-parser');
const cors = require('cors');
const uploadRoutes = require("./routes/uploadRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const blogRoutes = require("./routes/blogRoutes");
const postpropertyRoutes = require('./routes/PostPropertyRoutes');
const PostAgreecultureRoutes = require('./routes/PostAgreecultureRoutes');
const errorHandler = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/agentRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const teamMemberRoutes = require("./routes/teamMemberRoutes");
const companyAddressRoutes = require("./routes/companyAddressRoutes");
const phoneRoutes = require('./routes/phoneRoutes');



dotenv.config();
connectDB();

const app = express(); 
app.use(express.json()); //
app.use(express.urlencoded({ extended: true })); 
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
app.use('/api/agreecultureproperties', PostAgreecultureRoutes);

// Routes
app.use("/api/users", userRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

app.use("/api/team", teamMemberRoutes);

// Routes
app.use("/api/company-address", companyAddressRoutes);

app.use('/api/managephone', phoneRoutes);



// Error Middleware
app.use(errorHandler);


// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
