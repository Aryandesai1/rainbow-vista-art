import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">&copy; 2024 Rainbow Vista Art Inc. All rights reserved.</p>

        <p className="mb-2">
          📧 <a href="mailto:rainbowvistaart@gmail.com" className="text-light text-decoration-underline">
            rainbowvistaart@gmail.com
          </a>
        </p>

        <div className="d-flex justify-content-center gap-3 fs-4">
          <a
            href="https://www.instagram.com/rainbowvistaart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/people/Rainbow-Vista-Art/61566995397347/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
