const Blog = require("../models/Blog");
const cloudinary = require("../Config/cloudinaryConfig");
const fs = require("fs");

const createBlog = async (req, res) => {
    try {
        const { title, description, content, authorName, category, tags } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "blog_images",
        });

        fs.unlinkSync(req.file.path);

        const newBlog = new Blog({
            title,
            description,
            content,
            authorName,
            category,
            tags: tags.split(","), // Ensure it's an array
            imageUrl: result.secure_url,
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Fetch all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 }); // Fetch blogs in descending order
        res.status(200).json(blogs);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Fetch blog by ID
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

module.exports = { createBlog, getAllBlogs, getBlogById };
