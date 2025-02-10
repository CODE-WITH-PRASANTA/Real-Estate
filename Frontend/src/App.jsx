import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { HashLoader    } from "react-spinners";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Faqpage from "./Pages/FaqPage/FaqPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Hide loader after 3 seconds (or adjust based on your needs)
    }, 2000);
    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="loader">
          <HashLoader    size={55} color="#fb2a99" />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />}/>
            <Route path="/faq" element={<Faqpage />}/>
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
