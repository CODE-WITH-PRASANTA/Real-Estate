import React from "react";
import "./InquirySec.css";

const InquirySec = () => {
  return (
    <div className="enquiry-section">
      <div className="enquiry-overlay">
        <div className="enquiry-content">
          <h2>Discover a new way of living</h2>
          <p>
            Feugait scriptorem qui ea, quo admodum eloquentiam eu. Te malis
            tibique eum. Ne magna assum everi.
          </p>
        </div>
        <div className="enquiry-form">
          <h3>Make an enquiry</h3>
          <p>
            Save your time and easily rent or sell your property with the lowest
            commission on the real estate market.
          </p>
          <form>
            <input type="text" placeholder="Your name*" required />
            <input type="email" placeholder="Your email*" required />
            <input type="tel" placeholder="Your phone number*" required />
            <button type="submit">Contact To Admin</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquirySec;
