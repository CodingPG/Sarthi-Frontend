import React, { useState } from "react";
import axios from 'axios';
import '../styles/Register.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    relationship: "",
    contact: "",
    city: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form submitted:", formData);

    axios.post('http://localhost:8080/api/users', formData)
        .then(response => {
            alert(response.data.message);
        })
         .catch(error => {
             console.error("There was an error submitting the form:", error);
             alert(error.response?.data?.message || "Registration failed");
         });
};
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="page-title">Registration Form</h1>

        {/* Personal Information */}
        <h4>Personal Information</h4>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="relationship">Relationship</label>
            <select
              id="relationship"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              required
            >
              <option value="">Select Relationship Status</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Other relation">Other relation</option>
            </select>
          </div>
        </div>

        {/* Contact Information */}
        <h4>Contact Information</h4>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact">Contact Number:</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              pattern="[0-9]{10}"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />

            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emergencyContact">Emergency Contact Name:</label>
            <input
              type="text"
              id="emergencyContact"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleChange}
              required
            />

            <label htmlFor="emergencyPhone">Emergency Contact Number:</label>
            <input
              type="tel"
              id="emergencyPhone"
              name="emergencyContactNumber"
              pattern="[0-9]{10}"
              value={formData.emergencyContactNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password Information */}
        <h4>Set Password</h4>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit">Sign Up</button>
        <p className="switch-form">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
