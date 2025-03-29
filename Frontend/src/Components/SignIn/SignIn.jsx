import React, { useState } from "react";
import axios from "axios";
import { API_URL } from '../../Api'; // Import API URL
import signinbg from '../../assets/signin-bg-img.jpg';
import './SignIn.css';

const SignIn = () => {
  const [loginType, setLoginType] = useState("default");
  const [transitioning, setTransitioning] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [agentId, setAgentId] = useState("");

  const handleLoginTypeChange = (type) => {
    if (loginType === type) return;
    setTransitioning(true);
    setTimeout(() => {
      setLoginType(type);
      setTransitioning(false);
    }, 300);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        emailOrMobile: loginType === "sub-agent" ? agentId : email, // Unified field for email & mobile
        password,
        role: loginType === "sub-agent" ? "Subagent" : "Agent",
      };
  
      const response = await axios.post(`${API_URL}/auth/login`, requestData);
  
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
  
      if (response.data.user.role === "Agent") {
        window.location.href = "/agent-dashboard";
      } else if (response.data.user.role === "Subagent") {
        window.location.href = "/subagent-dashboard";
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
    }
  };
  
  const renderLoginContent = () => {
    switch (loginType) {
      case "sub-agent":
        return (
          <>
            <h2 className="signin-title">Sub-Agent Login</h2>
            <p className="signin-subtitle">Sign in as a sub-agent</p>
            <div className="signin-input-group">
              <label className="signin-label">Phone Number</label>
              <input
                type="text"
                className="signin-input"
                value={agentId}
                onChange={(e) => setAgentId(e.target.value)}
                placeholder="Enter your Agent ID"
              />
            </div>
            <div className="signin-input-group">
              <label className="signin-label">Password</label>
              <input
                type="password"
                className="signin-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="signin-input-group">
              <label className="signin-label">Password</label>
              <input
                type="password"
                className="signin-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <div className="signin-input-group">
              <label className="signin-label">Password</label>
              <input
                type="password"
                className="signin-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            onSubmit={handleLogin}
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
              Don’t have an account? <a href="/register">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;