const express = require("express");
const {
  registerUser,
  getAllUsers,
  getUserById,
  approveUser,
  deleteUser,
} = require("../Controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.patch("/:id/approve", approveUser);
router.delete("/:id", deleteUser);

module.exports = router;
