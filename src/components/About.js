import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../About.css'; // Import the CSS file for About page

const About = () => {
  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      {/* About Title and Description */}
      <header className="about-header">
        <h1 className="about-title">about Our TEAM</h1>
        <p className="about-description">
        Welcome to Ping and Locate! We are a passionate team dedicated to creating a reliable and intuitive platform for real-time device tracking, network diagnostics, and location identification. Our team is composed of diverse individuals who bring unique skills and experiences to the table. Here, we'd like to introduce you to the talented individuals who make it all happen.


        </p>
      </header>

      {/* Post Cards in About Page */}
      <div className="cards-grid">
        <div className="card">
          <h3>K.ARYA</h3>
          <p><strong>ID:</strong> 23L31A05BO</p>
          <p><strong>Phone:</strong> 6303776569</p>
          <p><strong>Username:</strong> Arya__15s</p>
        </div>
        <div className="card">
          <h3>K.HARSHITH</h3>
          <p><strong>ID:</strong> 23L31A05B6</p>
          <p><strong>Phone:</strong> 6302625976</p>
          <p><strong>Username:</strong> Harshith._2</p>
        </div>
        <div className="card">
          <h3>K.ANIL</h3>
          <p><strong>ID:</strong> 23L31A05B4</p>
          <p><strong>Phone:</strong> 9392948356</p>
          <p><strong>Username:</strong> Ani_l_19</p>
        </div>
        <div className="card">
          <h3>G.PUNNETH</h3>
          <p><strong>ID:</strong> 23L31A0586</p>
          <p><strong>Phone:</strong> 9177152206</p>
          <p><strong>Username:</strong> Punneth_29</p>
        </div>
        <div className="card">
          <h3>K.HARSHA</h3>
          <p><strong>ID:</strong> 23L31A0599</p>
          <p><strong>Phone:</strong> 8309766531</p>
          <p><strong>Username:</strong> harshavardhan_3_1</p>
        </div>
      </div>
    </div>
  );
};

export default About;
