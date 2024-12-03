import React from 'react';
import '../styles/Footer.css'; // Import the CSS for the footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          &copy; 2024 Sarthi Elder Care. All Rights Reserved.
        </div>
        <div className="footer-center">
          <div className="project-name">Sarthi Elder Care</div>
          <div className="project-by">~ Group Project by Code Avengers</div>
        </div>
        <div className="footer-right">
          <div className="tata-strive">TATA STRIVE Skill Development Center</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
