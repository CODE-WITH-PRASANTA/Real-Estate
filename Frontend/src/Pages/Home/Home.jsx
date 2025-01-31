import React, { useState, useEffect } from 'react';
import './Home.css';
import PropertyType from '../../Components/PropertyType/PropertyType';
import Discoverproperties from '../../Components/DiscoverProperties/Discoverproperties';
import HomeBenifits from '../../Components/HomeBenifits/HomeBenifits';
import Ourlocation from '../../Components/OurLocation/Ourlocation';
import TopProperties from '../../Components/TopProperties/TopProperties';
import MeetOurAgent from '../../Components/MeetOurAgent/MeetOurAgent';
import Testimonials from '../../Components/Testimonials/Testimonials';
import LateBlog from '../../Components/LatestBlog/LateBlog';

const Home = () => {
  const [text, setText] = useState('');
  const words = ['Fits Perfectly Your Dream Home', 'Find Your Ideal Property', 'Discover Luxury Living'];
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  // Typing animation for the hero section
  useEffect(() => {
    let typingTimer;
    if (typing) {
      if (text.length < words[index].length) {
        typingTimer = setTimeout(() => {
          setText(words[index].substring(0, text.length + 1));
        }, 100);
      } else {
        setTyping(false);
      }
    } else {
      typingTimer = setTimeout(() => {
        setTyping(true);
        setText('');
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1500);
    }
    return () => clearTimeout(typingTimer);
  }, [text, typing, index, words]);

  return (
   <>
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Find A Home & Property That <br />
          <span className="dynamic-text">{text}|</span>
        </h1>
        <p>
          Our experience ensures that your projects will be done right and with
          the utmost professionalism. Let’s find your dream home together.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Explore Now</button>
          <button className="btn btn-secondary">Contact Us</button>
        </div>
      </div>
    </div>

    <PropertyType />
    <Discoverproperties />
    <HomeBenifits />
    <Ourlocation />
    <TopProperties/>
    <MeetOurAgent />
    <Testimonials />
    <LateBlog />
   </>
  );
};

export default Home;
