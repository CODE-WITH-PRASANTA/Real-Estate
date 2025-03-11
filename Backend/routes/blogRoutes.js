const express = require("express");
const { createBlog, getAllBlogs, getBlogById } = require("../Controllers/blogController");
const upload = require("../Config/multer-config");

const router = express.Router();

router.post("/create", upload.single("image"), createBlog);
router.get("/blogs", getAllBlogs);
router.get("/blogs/:id", getBlogById);



module.exports = router;
