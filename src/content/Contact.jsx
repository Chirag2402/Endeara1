import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-item">
          <i className="fa fa-phone"></i>
          <span>
            Phone: <a href="tel:+911234567890">+91 123-456-7890</a>
          </span>
        </div>
        <div className="contact-item">
          <i className="fa fa-envelope"></i>
          <span>
            Email: <a href="mailto:info@endeara.com">info@endeara.com</a>
          </span>
        </div>
        <div className="contact-item">
          <i className="fa fa-map-marker"></i>
          <span>Address: 123, Business Street, Delhi, India</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
