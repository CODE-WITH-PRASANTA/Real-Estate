import React, { useState } from "react";
import "./BlogForm.css";

const BlogForm = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (

    <div className="Blog-create-wrapper">
    <div className="blog-editing-sec-container">
      <form className="blog-editing-sec-form">
        {/* Author Name Section */}
        <div className="blog-editing-sec-form-group">
          <label htmlFor="authorName" className="blog-editing-sec-label">
            Author Name
          </label>
          <input
            type="text"
            id="authorName"
            className="blog-editing-sec-input"
            placeholder="Enter Author Name"
          />
        </div>

        {/* Posting Date Section */}
        <div className="blog-editing-sec-form-group">
          <label htmlFor="postingDate" className="blog-editing-sec-label">
            Posting Date
          </label>
          <input
            type="date"
            id="postingDate"
            className="blog-editing-sec-input"
          />
        </div>

        {/* Blog Description Section */}
        <div className="blog-editing-sec-form-group">
          <label htmlFor="blogDescription" className="blog-editing-sec-label">
            Blog Description
          </label>
          <textarea
            id="blogDescription"
            className="blog-editing-sec-textarea"
            placeholder="Enter Blog Description"
          ></textarea>
        </div>

        {/* Categories Section */}
        <div className="blog-editing-sec-form-group">
          <label htmlFor="categories" className="blog-editing-sec-label">
            Categories
          </label>
          <select id="categories" className="blog-editing-sec-select">
            <option value="">Select a Category</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
          </select>
        </div>

        {/* Tags Section */}
        <div className="blog-editing-sec-form-group blog-editing-sec-tags">
          <label className="blog-editing-sec-label">Tags</label>
          <div className="blog-editing-sec-tags-input">
            <input
              type="text"
              className="blog-editing-sec-input"
              placeholder="Enter a tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            />
            <button
              type="button"
              className="blog-editing-sec-add-tag-btn"
              onClick={handleAddTag}
            >
              Add
            </button>
          </div>
          <div className="blog-editing-sec-tags-list">
            {tags.map((tag, index) => (
              <div key={index} className="blog-editing-sec-tag">
                {tag}
                <button
                  type="button"
                  className="blog-editing-sec-remove-tag-btn"
                  onClick={() => handleRemoveTag(tag)}
                >
                  ✖
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="blog-editing-sec-submit-btn">
            PUBLISH
        </button>
      </form>
    </div>
    </div>
  );
};

export default BlogForm;
