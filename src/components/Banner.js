import React, { useState, useEffect } from 'react';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

const Banner = () => {
  const images = [banner1, banner2, banner3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="position-relative text-white text-center"
      style={{
        height: '60vh',
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.8s ease-in-out',
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

      <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100 z-2">
        <h1 className="display-4 fw-bold">Bringing Art to Life with Color and Sound</h1>
        <p className="lead">Theatrical performances, music, and celebration across cultures.</p>
        <a href="#upcoming-shows" className="btn btn-primary mt-3">
          Explore Events
        </a>
      </div>
    </div>
  );
};

export default Banner;
