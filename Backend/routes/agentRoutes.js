const express = require("express");
const router = express.Router();
const { registerAgent, getAllAgents ,login , verifyToken  } = require("../Controllers/agentController");
const upload = require("../Config/multer-config");

router.post("/register", upload.single("profilePic"), registerAgent);
router.get("/all", getAllAgents);

// Login Route
router.post("/login", login);

router.get("/verify-token", verifyToken);



module.exports = router;
