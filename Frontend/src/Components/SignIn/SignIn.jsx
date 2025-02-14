import React, { useState } from "react";
import "./SignIn.css";

// Assets
import signinbg from "../../assets/signin-bg-img.jpg";

const SignIn = () => {
  const [loginType, setLoginType] = useState("default"); // "default", "sub-agent", "email"
  const [transitioning, setTransitioning] = useState(false);

  const handleLoginTypeChange = (type) => {
    if (loginType === type) return; // Prevent unnecessary transition
    setTransitioning(true);
    setTimeout(() => {
      setLoginType(type);
      setTransitioning(false);
    }, 300); // Match this duration with the CSS transition time
  };

  const renderLoginContent = () => {
    switch (loginType) {
      case "sub-agent":
        return (
          <>
            <h2 className="signin-title">Sub-Agent Login</h2>
            <p className="signin-subtitle">Sign in as a sub-agent</p>
            <div className="signin-input-group">
              <label className="signin-label">Agent ID</label>
              <input
                type="text"
                className="signin-input"
                placeholder="Enter your Agent ID"
              />
            </div>
            <div className="signin-input-group">
              <label className="signin-label">Password</label>
              <input
                type="password"
                className="signin-input"
                placeholder="Enter your password"
              />
            </div>
          </>
        );
      case "email":
        return (
          <>
            <h2 className="signin-title">Login with Email</h2>
            <p className="signin-subtitle">Sign in using your email</p>
            <div className="signin-input-group">
              <label className="signin-label">Email Address</label>
              <input
                type="email"
                className="signin-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="signin-input-group">
              <label className="signin-label">Password</label>
              <input
                type="password"
                className="signin-input"
                placeholder="Enter your password"
              />
            </div>
          </>
        );
      default:
        return (
          <>
            <h2 className="signin-title">Welcome Back</h2>
            <p className="signin-subtitle">Sign in to your account</p>
            <div className="signin-input-group">
              <label className="signin-label">Username</label>
              <input
                type="text"
                className="signin-input"
                placeholder="Enter your username"
              />
            </div>
            <div className="signin-input-group">
              <label className="signin-label">Password</label>
              <input
                type="password"
                className="signin-input"
                placeholder="Enter your password"
              />
            </div>
          </>
        );
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-left">
          <img src={signinbg} alt="Background" className="signin-bg" />
        </div>
        <div className="signin-right">
          <form
            className={`signin-form ${transitioning ? "fade-out" : "fade-in"}`}
          >
            {renderLoginContent()}
            <button type="submit" className="signin-btn">
              Login
            </button>
            <div className="signin-divider">
              <span>OR</span>
            </div>
            <div className="signin-alternate">
              <button
                type="button"
                className="signin-alternate-btn"
                onClick={() => handleLoginTypeChange("sub-agent")}
              >
                Sub-Agent Login
              </button>
              <button
                type="button"
                className="signin-alternate-btn"
                onClick={() => handleLoginTypeChange("email")}
              >
               Agent Login
              </button>
            </div>
            <p className="signin-register">
              Don’t have an account? <a href="#">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
