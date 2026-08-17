import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/weblog.jpg" alt="NEWANDIVHO Logo" className="footer-logo" />
            <p>Transforming businesses through technology and innovation. A 100% Black-owned IT solutions company committed to community empowerment.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#objectives">Objectives</a></li>
              <li><a href="#values">Core Values</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Software Development</a></li>
              <li><a href="#services">PC Hardware Repair</a></li>
              <li><a href="#services">Data Capture & Analysis</a></li>
              <li><a href="#services">Office Equipment Supply</a></li>
              <li><a href="#services">Cleaning Materials</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <FaPhone />
              <a href="tel:0680962778">068 096 2778</a>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope />
              <a href="mailto:nathannetshirembe@gmail.com">nathannetshirembe@gmail.com</a>
            </div>
            <div className="footer-badges">
              <span className="badge-pill">B-BBEE Level 1</span>
              <span className="badge-pill">100% Black Owned</span>
              <span className="badge-pill">Reg. 2026/188845/07</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NEWANDIVHO (PTY) LTD. All rights reserved. | Reg. No. 2026/188845/07 | Tax No. 9770801190</p>
        </div>
      </div>
    </footer>
  );
}
