const User = require("../models/User");

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const {
      role, firstName, lastName, experience, position, businessArea,
      email, licenseNo, street, additionalInfo, zipCode, place, country,
      phoneCode, phoneNumber, acceptedTerms,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      role, firstName, lastName, experience, position, businessArea,
      email, licenseNo, street, additionalInfo, zipCode, place, country,
      phoneCode, phoneNumber, acceptedTerms, approved: false, // Initially not approved
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully", newUser });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Public
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Approve a user
// @route   PATCH /api/users/:id/approve
// @access  Admin
const approveUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.approved = true;
    await user.save();

    res.status(200).json({ message: "User approved successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Delete user (only if not approved)
// @route   DELETE /api/users/:id
// @access  Admin
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.approved) {
      return res.status(403).json({ message: "Approved users cannot be deleted" });
    }

    await user.deleteOne();
    res.status(200).json({ message: "User deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  approveUser,
  deleteUser,
};
