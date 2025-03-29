import React, { useState, useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";
import axios from "axios";
import { API_URL } from "../../Api"; // Adjust the import path as needed

const FloatingCallButton = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/managephone/phone`)
      .then((res) => {
        if (res.data.number) {
          setPhoneNumber(res.data.number);
        }
      })
      .catch((err) => console.error("Error fetching phone number:", err));
  }, []);

  return (
    phoneNumber && (
      <a
        href={`tel:+91${phoneNumber}`}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#E94E77",
          color: "white",
          padding: "12px 15px",
          borderRadius: "50%",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          textDecoration: "none",
          zIndex: 1000,
        }}
      >
        <FiPhoneCall />
      </a>
    )
  );
};

export default FloatingCallButton;
