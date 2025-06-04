import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-5 bg-body-secondary text-center text-body">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">About Us</h2>
        <p className="lead mx-auto" style={{ maxWidth: '720px' }}>
          We are <span className="fw-semibold text-primary">Rainbow Vista Art</span>, dedicated to vibrant theatrical performances, music concerts, cultural celebrations, and destination events that inspire and connect audiences across India and Canada.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
