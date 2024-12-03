import React from "react";
import '../styles/Card.css';

const Card = ({ imageSrc, heading, link, linkText, alertMessage }) => {
  const handleClick = () => {
    if (alertMessage) {
      alert(alertMessage);
    }
  };

  return (
    <div className="cards">
      <img src={imageSrc} alt={heading} style={{ width: "100px" }} />
      <div className="heading">{heading}</div>
      <div className="text"></div>
      <a href={link} onClick={handleClick}>
        {linkText}
      </a>
    </div>
  );
};

export default Card;
