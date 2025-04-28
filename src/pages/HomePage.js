import React from 'react';
// import RegisterForm from '../components/RegisterForm';
// import LocationFilter from '../components/LocationFilter';
import '../HomePage.css'; // Import the CSS file
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="home-page">
    {/* Navbar */}
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/register">Register</Link>
        <Link to="/location-filter">Location Filter</Link>
      </div>
    </nav>

    {/* Project Title and Description */}
    <header className="header">
      <h1 className="project-title">My Project Title</h1>
      <p className="project-description">
        This is a brief description about the project, explaining its purpose and features.
      </p>
    </header>

    {/* Post Cards */}
    <div className="cards-grid">
      {[1, 2, 3, 4, 5].map((card) => (
        <div key={card} className="card">
          <h3>Post Title {card}</h3>
          <p>This is a sample description for post {card}.</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default HomePage;
