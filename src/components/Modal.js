import React from "react";
import '../styles/Footer.css';// Import the styles for the modal

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render if modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Key Features</h2>
        <p>Here are the key features of our Sarthi project:</p>
        <ul>
          <li>Efficient elder care management.</li>
          <li>Comprehensive data tracking.</li>
          <li>Customizable alerts and reminders.</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;