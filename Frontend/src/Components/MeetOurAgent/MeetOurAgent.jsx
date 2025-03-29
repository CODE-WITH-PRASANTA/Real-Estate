import React, { useEffect, useRef, useState } from "react";
import "./MeetOurAgent.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { Swiper as AgentSwiper, SwiperSlide as AgentSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { API_URL } from "../../Api"; // Adjust the import path as needed


const MeetOurAgent = () => {
  const [agents, setAgents] = useState([]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const fetchLocations = async () => {
      try {
          const response = await axios.get(`${API_URL}/properties/properties`);
          const uniqueLocations = [...new Set(response.data.map((property) => property.puttingLocation))];
          setLocations(uniqueLocations);
      } catch (error) {
          console.error("Error fetching locations:", error);
      }
  };
  
  const searchProperties = async () => {
      try {
          const response = await axios.get(`${API_URL}/properties/filter`, {
              params: { choosingType, choosingCategory, puttingLocation }
          });
          onFilter(response.data);
      } catch (error) {
          console.error("Error fetching properties:", error);
      }
  };
  
  return (
    <div ref={sectionRef} className={`meet-our-agent ${isVisible ? "animate" : ""}`}>
      <h3>OUR TEAMS</h3>
      <h2>Meet Our Agents</h2>

      <div className="agents-container">
        <div className="meet-mobile-view">
          <AgentSwiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="agent-swiper"
          >
            {agents.map((agent) => (
              <AgentSwiperSlide key={agent._id}>
                <div className="agent-card">
                  <div className="agent-image">
                    <img src={agent.profilePic} alt={agent.memberName} />
                    <div className="social-icons">
                      <a href={agent.facebook}><FaFacebookF /></a>
                      <a href={agent.twitter}><FaTwitter /></a>
                      <a href={agent.linkedin}><FaLinkedinIn /></a>
                      <a href={agent.instagram}><FaInstagram /></a>
                    </div>
                  </div>
                  <div className="agent-info">
                    <h4>{agent.memberName}</h4>
                    <p>{agent.designation}</p>
                    <div className="contact-icons">
                      <a href={`tel:${agent.phoneNumber}`}><MdCall /></a>
                      <a href={`mailto:${agent.email}`}><MdEmail /></a>
                    </div>
                  </div>
                </div>
              </AgentSwiperSlide>
            ))}
          </AgentSwiper>
        </div>

        <div className="desktop-tablet-view">
          {agents.map((agent, index) => (
            <div className={`agent-card ${isVisible ? "animate-card" : ""}`} key={agent._id}>
              <div className="agent-image">
                <img src={agent.profilePic} alt={agent.memberName} />
                <div className="social-icons">
                  <a href={agent.facebook}><FaFacebookF /></a>
                  <a href={agent.twitter}><FaTwitter /></a>
                  <a href={agent.linkedin}><FaLinkedinIn /></a>
                  <a href={agent.instagram}><FaInstagram /></a>
                </div>
              </div>
              <div className="agent-info">
                <h4>{agent.memberName}</h4>
                <p>{agent.designation}</p>
                <div className="contact-icons">
                  <a href={`tel:${agent.phoneNumber}`}><MdCall /></a>
                  <a href={`mailto:${agent.email}`}><MdEmail /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="footer-text">
        Become an agent and get the commission you deserve. <a href="/contact">Contact us</a>
      </p>
    </div>
  );
};

export default MeetOurAgent;