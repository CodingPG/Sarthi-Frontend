import React from 'react';
import './styles/Carousel.css'; // Ensure this file contains any custom styles for your carousel

const Carousel = () => (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/carousel1.jpg" className="d-block w-100" alt="Slide 1" style={{ height: '500px' }} />
        <div className="carousel-caption d-none d-md-block">
          <h5>Your Trusted Partner in Sarthi ElderCare</h5>
          <p>Reliable, respectful, and round-the-clock care for your loved ones</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/carousel2.jpg" className="d-block w-100" alt="Slide 2" style={{ height: '500px' }} />
        <div className="carousel-caption d-none d-md-block">
          <h5>Caring Hands, Compassionate Hearts</h5>
          <p>Providing the support your loved ones deserve, every step of the way</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/carousel3.jpg" className="d-block w-100" alt="Slide 3" style={{ height: '500px' }} />
        <div className="carousel-caption d-none d-md-block">
          <h5>Holistic Health for a Happier Life</h5>
          <p>Promoting healthy aging through personalized care and well-being programs</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>  
);

export default Carousel;
