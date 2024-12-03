import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Adjust the path accordingly

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // For showing error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.text(); // Use text() for non-JSON responses
        console.log('Login successful:', data);
          navigate('/service'); 
       
      } else {
        const errorData = await response.json(); // For error responses, backend should send JSON
        setError(errorData.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Invalid email or password.');
    }
  };  

  return (
    <div className="login-container2">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
        <p className="switch-form">
          New here? <a href="/register">Register Your Elder's</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;