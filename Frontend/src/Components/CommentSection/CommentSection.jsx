import React from "react";
import "./CommentSection.css";

const CommentSection = () => {
  return (
    <div className="comment-container">
      {/* Main Content */}
      <div className="comment-content">
        <h2 className="comment-title">Leave A Comment</h2>
        <p className="comment-note">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="comment-form">
          <div className="comment-row">
            <div className="comment-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="comment-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" />
            </div>
          </div>

          <div className="comment-group">
            <label>Review</label>
            <textarea placeholder="Write comment"></textarea>
          </div>

          <button className="comment-btn">Post Comment</button>
        </div>
      </div>

      {/* Aside Section - Why Choose Us */}
      <aside className="comment-why-choose-us">
        <h2 className="aside-title">Why Choose Us?</h2>
        <ul>
          <li>
            <span className="icon">🔒</span> Secure Booking
          </li>
          <li>
            <span className="icon">💰</span> Best Price Guarantee
          </li>
          <li>
            <span className="icon">☑️</span> Easy Booking Process
          </li>
          <li>
            <span className="icon">📞</span> Available Support 24/7
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default CommentSection;
