const jwt = require("jsonwebtoken");

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(403).json({ error: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid Token" });
  }
};

// Middleware to allow only Agents
const agentAuth = (req, res, next) => {
  if (!req.user || req.user.role !== "Agent") {
    return res.status(403).json({ error: "Access Denied: Agents Only" });
  }
  next();
};

// Middleware to allow only Sub-Agents
const subAgentAuth = (req, res, next) => {
  if (!req.user || req.user.role !== "Subagent") {
    return res.status(403).json({ error: "Access Denied: Sub-Agents Only" });
  }
  next();
};

module.exports = { verifyToken, agentAuth, subAgentAuth };
