import React from 'react';

const Contact = () => {
  return (
    <section id="contact-us" className="py-5 bg-body-secondary text-body">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4">Contact Us</h2>

        <p className="lead">
          We'd love to hear from you! Whether you're interested in tickets, collaboration, or media, get in touch.
        </p>

        <div className="mt-4">
          <p className="fs-5 mb-2">
            📧 <a href="mailto:rainbowvistaart@gmail.com" className="text-decoration-none text-primary">
              rainbowvistaart@gmail.com
            </a>
          </p>
          <p className="fs-5">
            📞 <a href="tel:+16473355753" className="text-decoration-none text-primary">
              +1 (647) 335-5753
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
