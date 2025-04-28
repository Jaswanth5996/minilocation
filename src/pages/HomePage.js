import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm'; // Assuming RegisterForm is present
import LocationFilter from '../components/LocationFilter'; // Assuming LocationFilter is present
import '../HomePage.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(true);

  const toggleView = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      {/* Project Title and Description */}
      <header className="header">
        <h1 className="project-title">Ping and Locate</h1>
        <p className="project-description">
        The "Ping and Locate" website is designed to provide real-time tracking and location identification services. It allows users to ping or check the status of a specific device, server, or network resource, and also locate or trace its geographical location based on IP address or GPS data.
        </p>
      </header>

      {/* Toggle Button */}
      <button className="toggle-btn" onClick={toggleView}>
        Switch to {showRegisterForm ? 'Location Filter' : 'Register Form'}
      </button>

      {/* Conditional Form Rendering */}
      <div className="form-container">
        {showRegisterForm ? <RegisterForm /> : <LocationFilter />}
      </div>
    </div>
  );
};

export default HomePage;
