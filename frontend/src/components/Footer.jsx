import React from 'react';
import { Link } from 'react-router-dom';
import uniLogo from '../assets/abu-logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* University Info */}
        <div className="footer-section">
          <img src={uniLogo} alt="ABU Logo" className="footer-logo" />
          <p className="footer-text">
            Antalya Bilim University<br />
            <br />
            Çıplaklı, Akdeniz Blv. No:290/A,<br />
            07190 Döşemealtı/Antalya<br />
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about">About SAS</Link></li>
            <li><Link to="/Assistant">Assistant</Link></li>
            <li><Link to="/map">Campus Map</Link></li>
            <li><Link to="/bus-routes">Bus Routes</Link></li>
            <li><Link to="/student-bus-card">Student Bus Card</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-contact">
            <li>Phone: +90 242 123 4567</li>
            <li>Email: sas@antalya.edu.tr</li>
            <li>Help Desk: Library Building, Floor 1</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-heading">Connect</h3>
          <div className="social-icons">
            <a href="https://facebook.com/antalyauni" aria-label="Facebook" target='_blank'>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/antalyauni" aria-label="Twitter" target='_blank'>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/antalyauni" aria-label="Instagram" target='_blank'>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com/antalyauni" aria-label="YouTube" target='_blank'>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Antalya Bilim University SAS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;