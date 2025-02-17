import React, { Suspense, lazy, useState } from "react";
import "./CreateBlog.css";
import BlogForm from "../BlogForm/BlogForm";

// Lazy load the TinyMCE Editor component
const Editor = lazy(() => import("@tinymce/tinymce-react").then((module) => ({ default: module.Editor })));

const CreateBlog = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreviewUrl(URL.createObjectURL(uploadedFile));
    }
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreviewUrl(URL.createObjectURL(uploadedFile));
    }
  };

  return (
    <>
      <div className="Blog-create-wrapper">
        <div className="Blog-create-container">
          <h2 className="Blog-create-title">Create a New Post</h2>

          {/* Breadcrumb */}
          <div className="Blog-create-breadcrumb">
            <span className="Blog-create-link">Dashboard</span> &gt;
            <span className="Blog-create-link"> Blog</span> &gt;
            <span className="Blog-create-current"> Create</span>
          </div>

          {/* Post Details Section */}
          <div className="Blog-create-section">
            <h3 className="Blog-create-subtitle">Post Details</h3>
            <p className="Blog-create-description">
              Add a title, short description, and a featured image.
            </p>

            <div className="Blog-create-field">
              <label className="Blog-create-label">Post Title</label>
              <input type="text" className="Blog-create-input" placeholder="Enter post title" />
            </div>

            <div className="Blog-create-field">
              <label className="Blog-create-label">Description</label>
              <textarea className="Blog-create-textarea" placeholder="Enter a short description"></textarea>
            </div>
          </div>

          {/* Content Editor Section */}
          <div className="Blog-create-section">
            <h3 className="Blog-create-subtitle">Post Content</h3>
            <div className="Blog-create-editor">
              {/* Suspense component to display a fallback loader */}
              <Suspense fallback={<div>Loading editor...</div>}>
                <Editor
                  apiKey="38wljwg2resc6xba8ypjqp4duobboibboshf3czbuyv5iulv"
                  init={{
                    plugins: [
                      "anchor",
                      "autolink",
                      "charmap",
                      "codesample",
                      "emoticons",
                      "image",
                      "link",
                      "lists",
                      "media",
                      "searchreplace",
                      "table",
                      "visualblocks",
                      "wordcount",
                      "paste",
                      "textcolor",
                    ],
                    toolbar:
                      "undo redo | bold italic underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media ",
                    menubar: false,
                    branding: false,
                    height: 400, // Adjust height for better UX
                    content_style: "body { font-family:Arial, sans-serif; font-size:14px; }", // Set editor font style
                    statusbar: false, // Hide statusbar
                    remove_linebreaks: false, // Keep line breaks
                  }}
                  initialValue="Write your content here..."
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <div className="Blog-create-wrapper">
        <div className="Blog-create-upload-container">
          <label className="Blog-create-upload-label">Cover</label>
          <div
            className="Blog-create-upload-box"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {previewUrl ? (
              <div className="Blog-create-upload-preview">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="Blog-create-upload-preview-image"
                />
              </div>
            ) : (
              <div className="Blog-create-upload-placeholder">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3616/3616729.png"
                  alt="Upload Illustration"
                  className="Blog-create-upload-icon"
                />
                <p className="Blog-create-upload-text">Drop or select file</p>
                <p className="Blog-create-upload-subtext">
                  Drop files here or click to <span className="Blog-create-browse">browse</span> through your machine.
                </p>
              </div>
            )}
            <input
              type="file"
              className="Blog-create-upload-input"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
        </div>
      </div>

      <BlogForm />
    </>
  );
};

export default CreateBlog;
