import React, { useEffect, useRef, useState } from "react";
import "./MeetOurAgent.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { Swiper as AgentSwiper, SwiperSlide as AgentSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { API_URL } from "../../Api"; // Adjust the path as needed

const MeetOurAgent = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const API_ENDPOINT = `${API_URL}/team/all`; // Construct the full endpoint

    const fetchAgents = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error("Failed to fetch team members.");
        }
        const data = await response.json();
        setAgents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <div ref={sectionRef} className={`meet-our-agent ${isVisible ? "animate" : ""}`}>
      <h3>OUR TEAMS</h3>
      <h2>Meet Our Agents</h2>

      {loading ? (
        <p>Loading team members...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
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
                        {agent.facebook && <a href={agent.facebook}><FaFacebookF /></a>}
                        {agent.twitter && <a href={agent.twitter}><FaTwitter /></a>}
                        {agent.linkedin && <a href={agent.linkedin}><FaLinkedinIn /></a>}
                        {agent.instagram && <a href={agent.instagram}><FaInstagram /></a>}
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
            {agents.map((agent) => (
              <div className={`agent-card ${isVisible ? "animate-card" : ""}`} key={agent._id}>
                <div className="agent-image">
                  <img src={agent.profilePic} alt={agent.memberName} />
                  <div className="social-icons">
                    {agent.facebook && <a href={agent.facebook}><FaFacebookF /></a>}
                    {agent.twitter && <a href={agent.twitter}><FaTwitter /></a>}
                    {agent.linkedin && <a href={agent.linkedin}><FaLinkedinIn /></a>}
                    {agent.instagram && <a href={agent.instagram}><FaInstagram /></a>}
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
      )}

      <p className="footer-text">
        Become an agent and get the commission you deserve. <a href="/contact">Contact us</a>
      </p>
    </div>
  );
};

export default MeetOurAgent;
