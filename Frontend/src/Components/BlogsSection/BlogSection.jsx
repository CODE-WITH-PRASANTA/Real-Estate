import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BlogSection.css";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs/blogs"); // Adjust API URL if needed
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blog-section">
      <h2 className="blog-header">Latest Insights & Trends</h2>
      <p className="blog-subtext">Stay updated with the latest in real estate, interior design, and investment trends.</p>

      <div className="blog-container">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <Link to={`/blog/${blog._id}`}>
                <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
              </Link>
              <div className="blog-content">
                <span className="blog-date">{new Date(blog.createdAt).toDateString()}</span>
                <p className="blog-meta">
                  <strong>{blog.authorName}</strong> • {blog.category}
                </p>
                <h3 className="blog-title">
                  <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                </h3>
                <p className="blog-description">{blog.description}</p>
                <Link to={`/blog/${blog._id}`} className="read-more">Read More →</Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading blogs...</p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
