import React from 'react';
import poster from '../assets/images/poster.jpg';

const UpShows = () => {
  return (
    <section id="upcoming-shows" className="py-5 bg-body text-center text-body">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Upcoming Events</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm h-100">
              
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Gujju Rocks</h5>
                <p className="card-text text-muted">Date: TBD</p>
                <a href="#contact-us" className="btn btn-primary mt-auto">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpShows;
