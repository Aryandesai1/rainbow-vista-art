import React, { useState, useEffect } from 'react';
import logo from '../assets/images/RVA_Logo.png';

const Header = () => {
  const [theme, setTheme] = useState('lux');

  // Load the correct theme dynamically
  useEffect(() => {
    let link = document.getElementById('bootswatch-theme');

    if (!link) {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.id = 'bootswatch-theme';
      document.head.appendChild(link);
    }

    link.href = `https://cdn.jsdelivr.net/npm/bootswatch@5/dist/${theme}/bootstrap.min.css`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'lux' ? 'darkly' : 'lux'));
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Rainbow Vista Art"
            style={{ height: '40px', marginRight: '10px' }}
          />
          <span className="fw-bold">Rainbow Vista Art</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#upcoming-shows">Upcoming Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#previous-shows">Previous Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#artists">Our Artists</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-us">Contact Us</a>
            </li>
            <li className="nav-item d-flex align-items-center ps-lg-3">
              <button onClick={toggleTheme} className="btn btn-outline-primary btn-sm">
                {theme === 'lux' ? 'Switch to Dark' : 'Switch to Light'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;