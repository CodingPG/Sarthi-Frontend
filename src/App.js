import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import AboutUs from './components/AboutUs'; 
import Service from './components/Service';
import ContactUs from './components/ContactUs';
import Login from './components/Login';  // Import Login page
import Register from './components/Register';  // Import Register page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';  // Import the Cards component
import Footer from './components/Footer.js'
import BookAppointment from './components/BookAppointment';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Render Carousel and Cards only on the Home Page */}
          <Route 
            path="/" 
            element={
              <>
                {/* Add your Heading here */}
                <h1 className="home-heading" style={{ textAlign: 'center', color: 'rgb(255, 51, 119)', fontFamily: 'Poppins' }}>"Caring for Those Who Cared for Us."</h1> {/* Example Heading */}
                <Carousel />
                <Cards />
              </>
            } 
          />
          
          {/* Render other components on their respective routes */}
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/login" element={<Login />} />  {/* Login page */}
          <Route path="/register" element={<Register />} />  {/* Register page */}
          <Route path="/book-appointment" element={<BookAppointment />} />

        </Routes>
        <Footer />
      </div>
    </Router>

   // <BookAppointment />
  );
};

export default App;
