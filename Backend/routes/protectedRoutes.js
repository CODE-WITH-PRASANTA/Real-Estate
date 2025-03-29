const express = require("express");
const { verifyToken, agentAuth, subAgentAuth } = require("../middleware/authMiddleware");

const router = express.Router();

// Protected Route for Agents
router.get("/agent-dashboard", verifyToken, agentAuth, (req, res) => {
  res.status(200).json({ message: "Welcome to the Agent Dashboard" });
});

// Protected Route for Sub-Agents
router.get("/subagent-dashboard", verifyToken, subAgentAuth, (req, res) => {
  res.status(200).json({ message: "Welcome to the Sub-Agent Dashboard" });
});

module.exports = router;
