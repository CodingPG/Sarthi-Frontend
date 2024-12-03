import React from 'react';
import Card from './Card';  // Assuming you have a Card component for individual cards

const Cards = () => {
  return (
    <div className="cards-container">
      <Card
        imageSrc="login.png"
        heading="LOGIN"
        link="/login"
        linkText="Click here to login"
        alertMessage="Make sure that you have registered"
      />
      <Card
        imageSrc="register.png"
        heading="REGISTER"
        link="/register"
        linkText="Click here to register"
      />
    </div>
  );
};

export default Cards;
