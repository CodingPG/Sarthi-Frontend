import React from "react";
import '../styles/Service.css';

const Service = () => {
  return (
    <div className="services-container">
      {/* Appointment Service */}
      <article className="service">
        <img src="/appointment.png" alt="Professional appointment booking" className="service-img" />
        <h2>Appointment Booking</h2>
        <p>
          Easily book an appointment with our professionals. Choose a time that suits your schedule and avoid long waiting times.
        </p>
        <ul>
          <li>
            <img src="/checklist.png" alt="Checkmark" className="bullet-icon" />
            Flexible scheduling
          </li>
          <li>
            <img src="/checklist.png" alt="Checkmark" className="bullet-icon" />
            Seamless booking experience
          </li>
          <li>
            <img src="/checklist.png" alt="Checkmark" className="bullet-icon" />
            Reminders for upcoming appointments
          </li>
        </ul>
        <a href="/book-appointment" className="service-btn">
          Book Appointment
        </a>
      </article>

      {/* Report Service */}
      <article className="service">
        <img src="/report.png" alt="Generate detailed reports" className="service-img" />
        <h2>Health Reports</h2>
        <p>
          Access detailed health reports. Stay informed about progress and manage your records efficiently.
        </p>
        <ul>
          <li>
            <img src="/checklist.png" alt="Checkmark" className="bullet-icon" />
            Downloadable PDFs
          </li>
          <li>
            <img src="/checklist.png" alt="Checkmark" className="bullet-icon" />
            Access detailed reports
          </li>
          <li>
            <img src="/checklist.png" alt="Checkmark" className="bullet-icon" />
            Efficient record management
          </li>
        </ul>
        <a href="#" className="service-btn">
          View Report
        </a>
      </article>
    </div>
  );
};

export default Service;
