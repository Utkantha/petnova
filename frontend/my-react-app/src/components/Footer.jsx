import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import logo from '../Assests/petlogonew.png';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-cta-section">
        <div className="footer-cta-content glass-panel">
          <h2>Ready to Find Your New Best Friend?</h2>
          <p>Join the Pawfect Match community today and get the latest on pet adoption, care tips, and exclusive updates!</p>
          <div className="cta-buttons">
            <Link to="/register" className="btn-modern btn-primary cta-btn">Sign Up Now</Link>
          </div>
        </div>
      </div>

      <div className="footer-links-container">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src={logo} alt="Pawfect Match Logo" />
            <h2>Pawfect Match</h2>
          </div>
          <p className="brand-desc">Uniting loving homes with furry friends. Feed them, don't hit them.</p>
        </div>

        <div className="footer-col">
          <h3>Resources</h3>
          <Link to="#">FAQs</Link>
          <Link to="#">Mobile App</Link>
          <Link to="#">Partnerships</Link>
          <Link to="#">News Center</Link>
          <Link to="#">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h3>Adopt</h3>
          <Link to="#">Adopting Pets</Link>
          <Link to="#">Animal Shelters</Link>
          <Link to="#">Success Stories</Link>
          <Link to="#">Volunteer</Link>
        </div>

        <div className="footer-col">
          <h3>Learn</h3>
          <Link to="#">Dog Care</Link>
          <Link to="#">Cat Care</Link>
          <Link to="#">Pet Training</Link>
          <Link to="#">Health & Wellness</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>©2026 Pawfect Match. All rights reserved.</p>
        </div>
        <div className="footer-socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
