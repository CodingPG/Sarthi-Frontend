import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AboutUs = () => {
  const [activeModal, setActiveModal] = useState(null); // State to track which modal is open

  const handleOpenModal = (modalId) => setActiveModal(modalId); // Open a specific modal
  const handleCloseModal = () => setActiveModal(null); // Close all modals

  return (
    <div className="container" style= {{ marginTop: '15px'}}>
        {/* About Us Section */}
        <div className="row">
          <div className="col-md-8 about-text" style={{ marginTop: '20px', background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px' }}>
          
            
            <h2>Our Mission</h2>
            <p>
            <strong style={{ color: 'rgb(255, 51, 119)' }}>Sarthi ElderCare</strong> is dedicated to improving the lives of seniors through personalized care management. Our platform is designed to provide essential services like medication reminders, health monitoring, and appointment scheduling, allowing elderly individuals to maintain their independence while receiving critical support.
            </p>
            <p>
              By facilitating seamless communication between caregivers, healthcare providers, and seniors, we ensure that elderly care is not only efficient but compassionate and responsive.
            </p>
            <p>
              "<strong style={{ color: 'rgb(255, 51, 119)' }}>Sarthi</strong> is not just a tool; it’s a heartwarming companion for our beloved seniors. It combines technology with kindness, making elderly care more enjoyable."
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://research.american.edu/careworkeconomy/wp-content/uploads/sites/2/2019/09/nurse-comforting-elder-lady-2mp.jpg"
              alt="Sarthi ElderCare Logo"
              className="img-fluid" style={{ marginTop: '70px', marginBottom: '35px' }}
            />
          </div>
        </div>
          <h5 style={{ textAlign: 'center', padding: '10px 0' }}>"Sarthi ElderCare - Your trusted elderly care management solution"</h5>

      {/* Features Section */}
      <div className="feature-box" style={{ marginTop: '50px' }}>
        <h2 style={{ fontSize: '28px', color: '#4b66ff', marginBottom: '30px' }}>Key Features</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <h3>Medication Reminders</h3>
            <img
              src="https://creakyjoints.org/wp-content/uploads/2018/11/0918_Medication-Reminder-1024x683.jpg"
              alt="Medication Reminders"
              className="img-fluid"
              style={{ width: '80px', height: '80px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => handleOpenModal(1)} // Open the first modal
            />
            <p>Receive timely alerts for medication to avoid missed doses.</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Health Monitoring</h3>
            <img
              src="https://static6.depositphotos.com/1015682/573/i/450/depositphotos_5734409-stock-photo-flat-line-alert-on-heart.jpg"
              alt="Health Monitoring"
              className="img-fluid"
              style={{ width: '80px', height: '80px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => handleOpenModal(2)} // Open the second modal
            />
            <p>Monitor health stats and trends in real-time for proactive care.</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Appointment Scheduling</h3>
            <img
              src="https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg"
              alt="Appointment Scheduling"
              className="img-fluid"
              style={{ width: '80px', height: '80px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => handleOpenModal(3)} // Open the third modal
            />
            <p>Schedule doctor appointments with reminders for timely care.</p>
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal === 1 && (
        <div className="modal-overlay" style={overlayStyle}>
          <div className="modal-content" style={modalStyle}>
            <button onClick={handleCloseModal} style={closeButtonStyle}>X</button>
            <h2 style={{color: 'rgb(255, 51, 119)'}}>Medication Reminders</h2><br></br>
            <p style={{color: '#005580'}}>One of the standout features of Sarthi ElderCare is its reliable medication reminders. This functionality ensures that elderly individuals stay on track with their prescribed treatments by providing timely notifications for every dose. Forgetting medications is a common challenge for seniors, and this feature significantly reduces the risk of missed doses, improving overall health outcomes. Caregivers can also stay informed about adherence to medication schedules, providing peace of mind to families and loved ones.</p>
          </div>
        </div>
      )}

      {activeModal === 2 && (
        <div className="modal-overlay" style={overlayStyle}>
          <div className="modal-content" style={modalStyle}>
            <button onClick={handleCloseModal} style={closeButtonStyle}>X</button>
            <h2 style={{color: 'rgb(255, 51, 119)'}}>Health Monitoring</h2><br></br>
            <p style={{color: '#005580'}}>Our platform offers robust health monitoring capabilities, including the generation of digital health reports. With real-time tracking of vital statistics like blood pressure, sugar levels, and other key indicators, this feature empowers proactive care. Seniors and their caregivers can make informed decisions about health interventions, avoiding potential complications. The digital health report adds an extra layer of convenience, enabling easy sharing with healthcare professionals and ensuring a detailed record of health trends over time.</p>
          </div>
        </div>
      )}

      {activeModal === 3 && (
        <div className="modal-overlay" style={overlayStyle}>
          <div className="modal-content" style={modalStyle}>
            <button onClick={handleCloseModal} style={closeButtonStyle}>X</button>
            <h2 style={{color: 'rgb(255, 51, 119)'}}>Appointment Scheduling</h2><br></br>
            <p style={{color: '#005580'}}>With appointment scheduling, Sarthi ElderCare makes managing healthcare easier than ever. This feature helps elderly individuals and their caregivers plan doctor visits efficiently, eliminating the stress of last-minute arrangements. With built-in reminders for upcoming appointments, seniors can prioritize their health without the fear of forgetting important dates. This not only saves time but also strengthens communication between patients and healthcare providers, ensuring a smoother healthcare experience.</p>
          </div>
        </div>
      )}

      {/* Meet the Team Section */}
      <div className="feature-box" style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '28px', color: '#4b66ff', marginBottom: '30px' }}>Meet the Team</h2>
          <div className="row">
            <div className="col-md-3 team-member" style={{ textAlign: 'center' }}>
              <img
                src="/Vaish.jpg"
                alt="Vaishnavi Patil"
                className="img-fluid rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <h5>Vaishnavi Patil</h5>
              <p>Project Leader</p>
            </div>
            <div className="col-md-3 team-member" style={{ textAlign: 'center' }}>
              <img
                src="https://media.licdn.com/dms/image/D4D03AQE8HK-cjH4kTg/profile-displayphoto-shrink_200_200/0/1690514367582?e=2147483647&v=beta&t=u9T7KiqOmrn1C6rrQsQ-dEVy0T5J9z-N3RmoDgcNoTE"
                alt="Ujwala Paswan"
                className="img-fluid rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <h5>Ujwala Paswan</h5>
              <p>Frontend Developer</p>
            </div>
            <div className="col-md-3 team-member" style={{ textAlign: 'center' }}>
              <img
                src="/gaurav.jpg"
                alt="Gaurav Gondake"
                className="img-fluid rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <h5>Gaurav Gondake</h5>
              <p>Backend Developer</p>
            </div>
            <div className="col-md-3 team-member" style={{ textAlign: 'center' }}>
              <img
                src="/pratham.jpg"
                alt="Team Member"
                className="img-fluid rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <h5>Pratham Dukhande</h5>
              <p>Database Manager</p>
            </div>
          </div>
        </div>

        {/* Client Testimonials Section */}
        <div className="testimonial" style={{ marginTop: '50px', backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px' }}>
          <h2>Client Testimonials</h2>
          <p>"Sarthi ElderCare has transformed the way I care for my elderly parents. The reminders and tracking features make it so much easier!"</p>
          <p style={{ textAlign: 'right' }}><strong>- Anjali Sharma</strong></p>
          <p>"I couldn't be more grateful for Sarthi ElderCare's support. Their services provide peace of mind knowing my mother is well taken care of."</p>
          <p style={{ textAlign: 'right' }}><strong>- Rakesh Kumar</strong></p>
        </div>

        {/* Client Logos Section */}
        <div className="client-logo" style={{ marginTop: '50px', textAlign: 'center' }}>
          <img src="https://cdn.vectorstock.com/i/500p/35/49/elderly-person-icon-isolated-vector-49763549.jpg" alt="Client Logo 1" style={{ margin: '0 15px', width: '100px', height: '100px' }} />
          <img src="/elderly (1).png" alt="Client Logo 2" style={{ margin: '0 15px', width: '75px', height: '75px' }} />
          <img src="https://marketplace.canva.com/EAE8fLYOzrA/1/0/1600w/canva-health-care-bO8TgMWVszg.jpg" alt="Client Logo 3" style={{ margin: '0 15px', width: '100px', height: '100px' }} />
          <img src="https://static.vecteezy.com/system/resources/thumbnails/022/705/701/small/customer-care-icon-management-support-and-help-client-illustration-symbol-patient-assistance-sign-or-logo-vector.jpg" alt="Client Logo 4" style={{ margin: '0 15px', width: '100px', height: '100px' }} />
        </div>
      </div>
  );
};

/* Styles */
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyle = {
  background: 'wheat',
  padding: '45px',
  borderRadius: '15px',
  width: '600px',
  maxWidth: '90%',
  position: 'relative',
  textAlign: 'center',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'transparent',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
};

export default AboutUs;
