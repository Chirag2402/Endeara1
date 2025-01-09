import React from 'react'
import "./Footer.css"
import ImageName from "/images/Logo.png"

const Footer = () => {
  return (
<footer className="footer">
  <div className="footer-container">
    <div className="footer-branding">
     <img className="footer-title" src = {ImageName} alt="logo"/>
      <p className="footer-tagline">Your one-stop destination for thoughtful gifts.</p>
    </div>


    <div className="footer-contact">
      <h4>Contact Us</h4>
      <p>📞 Phone: +1-800-123-4567</p>
      <p>📧 Email: <a href="mailto:support@edeara.com">support@edeara.com</a></p>
      <p>📍 Address: 123 Gift Lane, New York, NY 10001</p>
    </div>


    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/faq">FAQs</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-note">
    © 2025 Endeara. All Rights Reserved.
  </div>
</footer>

  )
}

export default Footer
