import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
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

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timeout);
    }, [location.pathname]);

    // Determine whether to hide Navbar and Footer
    const isAdminRoute = location.pathname.startsWith("/admin");
    const isLoginRoute = location.pathname === "/login";
    const isRegisterRoute = location.pathname === "/register";

    return (
        <div className="app">
            <ScrollToTop />
            {loading ? (
                <div className="loader">
                    <HashLoader size={55} color="#fb2a99" />
                </div>
            ) : (
                <>
                    {/* Render Navbar only if not on an admin route */}
                    {!isAdminRoute && <Navbar />}
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
                        <Route path="/login" element={<SignIn />} />
                        <Route path="/submit" element={<SubmitProperty />} />
                        <Route path="/admin" element={<AdminNavbar />} />
                        <Route path="/property/:id" element={<PropertyDetails />} />

                    </Routes>
                    {/* Render Footer only if not on an admin or register route */}
                    {!isAdminRoute && !isRegisterRoute && !isLoginRoute && <Footer />}
                </>
            )}
        </div>
    );
};

const WrappedApp = () => (
    <Router>
        <App />
    </Router>
);

export default WrappedApp;
