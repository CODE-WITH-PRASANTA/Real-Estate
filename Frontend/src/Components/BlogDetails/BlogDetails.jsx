import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify"; // To sanitize HTML content
import { API_URL } from "../../Api"; // Import the API base URL
import "./BlogDetails.css";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch blog details based on the provided ID
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${API_URL}/blogs/blogs/${id}`);
                setBlog(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch blog details.");
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    // Handle loading and error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="Blog-Details-Container">
            <div className="Blog-Details-Content">
                {blog && (
                    <>
                        {/* Blog Title */}
                        <h1 className="Blog-Details-Title">{blog.title}</h1>
                        
                        {/* Blog Meta Details */}
                        <div className="Blog-Details-Meta">
                            <span>📌 {blog.authorName}</span> | <span>📂 {blog.category}</span> | 
                            <span>📅 {new Date(blog.createdAt).toLocaleDateString()}</span>
                        </div>

                        {/* Blog Description */}
                        <p className="Blog-Details-Description">{blog.description}</p>

                        {/* Blog Main Image */}
                        {blog.imageUrl && (
                            <img
                                src={blog.imageUrl}
                                alt={blog.title}
                                className="Blog-Details-MainImage"
                            />
                        )}

                        {/* Blog Content Rendered as HTML */}
                        <div
                            className="Blog-Details-HTMLContent"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(blog.content), // Sanitize content before rendering
                            }}
                        ></div>

                        {/* Quote Example */}
                        {blog.description && (
                            <>
                            <blockquote className="Blog-Details-Quote">{blog.description}</blockquote>
                            <p className="Blog-Details-QuoteAuthor">- {blog.authorName}</p>
                            </>
                        )}
                    </>
                )}

                {/* Comment Section */}
                <div className="Blog-Details-CommentSection">
                    <h2>Leave A Comment</h2>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <form className="Blog-Details-CommentForm">
                        <div className="Comment-Row">
                            <input type="text" placeholder="Your name" required />
                            <input type="email" placeholder="Your email" required />
                        </div>
                        <textarea placeholder="Write comment" required></textarea>
                        <button type="submit">Post Comment</button>
                    </form>
                </div>
            </div>

            {/* Sidebar Section */}
            <aside className="Blog-Details-Sidebar">
                {/* Search Bar */}
                <div className="Blog-Details-SearchBar">
                    <input type="text" placeholder="Search..." />
                </div>

                {/* Categories Section */}
                <div className="Blog-Details-Categories">
                    <h3>Categories</h3>
                    <ul>
                        <li>Market Updates (50)</li>
                        <li>Buying Tips (34)</li>
                        <li>Interior Inspiration (69)</li>
                        <li>Investment Insights (25)</li>
                        <li>Home Construction (12)</li>
                        <li>Legal Guidance (12)</li>
                        <li>Community Spotlight (69)</li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="Blog-Details-Newsletter">
                    <h3>Join Our Newsletter</h3>
                    <p>Signup to hear about exclusive deals, special offers, and upcoming collections.</p>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>

                {/* Popular Tags Section */}
                <div className="Blog-Details-PopularTags">
                    <h3>Popular Tags</h3>
                    <div className="Blog-Details-Tags">
                        {blog && blog.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default BlogDetails;
