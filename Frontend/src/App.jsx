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

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Router>
            <ScrollToTop /> {/* Ensures every route change scrolls to the top */}
            {loading ? (
                <div className="loader">
                    <HashLoader size={55} color="#fb2a99" />
                </div>
            ) : (
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogDetails />} />
                        <Route path="/agent" element={<AgentSubscription />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/property" element={<Properties />}/>
                    </Routes>
                    <Footer />
                </>
            )}
        </Router>
    );
}

export default App;
