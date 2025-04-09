import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FloatingCallButton from "./Components/FloatingCallButton/FloatingCallButton"; // Import the FloatingCallButton
import { HashLoader } from "react-spinners";

// Import Pages
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import FaqPage from "./Pages/FaqPage/FaqPage";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import AgentSubscription from "./Pages/AgentSubscription/AgentSubscription";
import About from "./Pages/About/About";
import Properties from "./Pages/Properties/Properties";
import SignIn from "./Components/SignIn/SignIn";
import SubmitProperty from "./Pages/SubmitProperty/SubmitProperty";
import AdminNavbar from "./AdminPannel/AdminNavbar/AdminNavbar";
import OurService from "./Pages/OurService/OurService";
import Register from "./Components/Register/Register";
import PropertyDetails from "./Components/PropertyDeatils/PropertyDetails";
import AgentDashboard from "./Components/AgentDashboard/AgentDashboard";
import SubagentDashboard from "./Components/SubagentDashboard/SubagentDashboard";
import { API_URL } from "./Api";  // Ensure proper import of API_URL
import AgreecultureProperties from "./Pages/AgreecultureProperties/AgreecultureProperties";
import AgreeculturePropertyDetails from "./Components/AgreeculturePropertyDetails/AgreeculturePropertyDetails";
import AdminLogin from "./AdminPannel/AdminLogin/AdminLogin";
import AgentLayout from "./Components/AgentLayout/AgentLayout";
import AgentProfile from "./Components/AgentProfile/AgentProfile";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const fetchUserRole = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) return null;

        const response = await axios.get(`${API_URL}/auth/verify-token`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response.data.role;
    } catch (error) {
        console.error("Error fetching user role:", error);
        return null;
    }
};

const ProtectedRoute = ({ element, allowedRoles }) => {
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const role = await fetchUserRole();
            setUserRole(role);
            setLoading(false);
        };
        checkAuth();
    }, []);

    if (loading) return <div className="loader"><HashLoader size={55} color="#fb2a99" /></div>;

    return userRole && allowedRoles.includes(userRole) ? element : <Navigate to="/login" />;
};

const App = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timeout);
    }, [location.pathname]);

    // Check route conditions
    const isAdminRoute = location.pathname.startsWith("/admin");
    const isLoginRoute = location.pathname === "/login";
    const isRegisterRoute = location.pathname === "/register";
    const isAgentDashboard = location.pathname.startsWith("/agent-dashboard");

    // Determine whether to show Navbar, Footer, and Floating Button
    const showNavbar = !isAdminRoute && !isAgentDashboard;
    const showFooter = !isAdminRoute && !isAgentDashboard && !isRegisterRoute && !isLoginRoute;
    const showFloatingButton = !isAdminRoute && !isAgentDashboard;

    return (
        <div className="app">
            <ScrollToTop />
            {loading ? (
                <div className="loader">
                    <HashLoader size={55} color="#fb2a99" />
                </div>
            ) : (
                <>
                    {showNavbar && <Navbar />}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogDetails />} />
                        <Route path="/agent" element={<AgentSubscription />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<OurService />} />
                        <Route path="/property" element={<Properties />} />
                        <Route path="/property/:id" element={<PropertyDetails />} />
                        <Route path="/login" element={<SignIn />} />
                        <Route path="/submit" element={<SubmitProperty />} />
                        <Route path="/admin" element={<AdminLogin />} />
                        <Route path="/agreculture" element={<AgreecultureProperties />} />
                        <Route path="/agreculture/:id" element={<AgreeculturePropertyDetails />} />

                        {/* Protected Routes */}
                        <Route
                            path="/agent-dashboard"
                            element={
                                <ProtectedRoute
                                allowedRoles={["Agent"]}
                                element={
                                    <AgentLayout>
                                    <AgentDashboard />
                                    </AgentLayout>
                                }
                                />
                            }
                            />

                            <Route
                            path="/agent-dashboard/profile"
                            element={
                                <ProtectedRoute
                                allowedRoles={["Agent"]}
                                element={
                                    <AgentLayout>
                                    <AgentProfile />
                                    </AgentLayout>
                                }
                                />
                            }
                            />

                    </Routes>
                    {showFooter && <Footer />}
                    {showFloatingButton && <FloatingCallButton />}
                </>
            )}
        </div>
    );
};

// Wrap with Router
const WrappedApp = () => (
    <Router>
        <App />
    </Router>
);

export default WrappedApp;
