import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-col1">
        <div className="col1-body">
          <div className="contact title">
            <h2>Get in touch</h2>
          </div>
          <div className="contact-body">
            <div className="contact-name">
              <input type="text" placeholder="Username" className="name" />
            </div>
            <div className="contact-email">
              <input type="text" placeholder="Email" className="email" />
            </div>
            <div className="contact-address">
              <input type="text" placeholder="Address" className="address" />
            </div>
            <div className="contact-message">
              <input type="text" placeholder="Message" className="message" />
            </div>
            <div className="contact-button">
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-col2">
        <img src="./collection/banner/location.jpg" alt="location" />
      
      </div>
    </div>
  );
};

export default Contact;
