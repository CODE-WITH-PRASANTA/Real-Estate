const Agent = require("../models/Agent");
const bcrypt = require("bcryptjs");
const cloudinary = require("../Config/cloudinaryConfig");
const jwt = require("jsonwebtoken");


// Register Agent
exports.registerAgent = async (req, res) => {
  try {
    const { name, email, mobile, location, role, password } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Profile picture is required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Upload Image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    const newAgent = new Agent({
      name,
      email,
      mobile,
      location,
      role,
      password: hashedPassword,
      profilePic: result.secure_url,
    });

    await newAgent.save();
    res.status(201).json({ message: "Agent registered successfully", newAgent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Agents
exports.getAllAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.verifyToken = async (req, res) => {
  try {
      const token = req.header("Authorization").split(" ")[1]; // Extract token after "Bearer"
      if (!token) return res.status(403).json({ error: "Access Denied" });

      const verified = jwt.verify(token, process.env.JWT_SECRET);
      res.status(200).json({ role: verified.role }); // Return role
  } catch (error) {
      res.status(401).json({ error: "Invalid Token" });
  }
};

exports.login = async (req, res) => {
  try {
    const { emailOrMobile, password, role } = req.body; // Accept email or mobile as input
    
    // Check if the user exists with the provided email or mobile and role
    const agent = await Agent.findOne({
      $or: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
      role, // Ensure the role matches
    });

    if (!agent) {
      return res.status(404).json({ error: "User not found or role mismatch" });
    }

    const isMatch = await bcrypt.compare(password, agent.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token with role information
    const token = jwt.sign(
      { id: agent._id, role: agent.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: agent._id, name: agent.name, role: agent.role },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

