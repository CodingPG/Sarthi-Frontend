import React, { useState } from "react";
import "../styles/ContactUs.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzSlqlYjm9p5iPyWqgKLwtzfUHfngL5z1KKT8GKy0vdgXBTV__2tkwDUss8U-rNArQG/exec", // Your Google Apps Script URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      // Check if the response was successful
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      // Parse the JSON response
      const result = await response.json();
  
      // Check for a successful status in the response
      if (result.status === "success") {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponseMessage(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResponseMessage(`An error occurred: ${error.message}. Please try again later.`);
    }
  };
  

  return (
    <div style={{ marginTop: "10px" }}>
      <div className="container">
        <div className="content">
          {/* Left Section */}
          <div className="left-side" style={{ marginLeft: "20px" }}>
            <div className="details" style={{ marginLeft: "100px" }}>
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Our Address</div>
              <div className="text">Mumbai</div>
              <div className="text">Sharda Chowk</div>
            </div>
            <div className="details" style={{ marginLeft: "100px" }}>
              <i className="fas fa-phone"></i>
              <div className="topic">Phone</div>
              <div className="text">+91 98 9397 9695</div>
            </div>
            <div className="details" style={{ marginLeft: "100px" }}>
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text">sarthicare@gmail.com</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="phone-container">
                <span className="phone-code">+91</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  pattern="[0-9]{10}"
                  title="Phone number must be 10 digits."
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="button-container">
                <input type="submit" value="Send" />
                <input
                  type="reset"
                  value="Clear"
                  onClick={() =>
                    setFormData({ name: "", email: "", phone: "", message: "" })
                  }
                />
              </div>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;