import React from 'react';
import poster from '../assets/images/poster.jpg';
import InstagramEmbed from './InstagramEmbed';

const PrevShows = () => {
  return (
    <section id="previous-shows" className="py-5 bg-body-secondary text-body">
      <div className="container">
        <h2 className="display-5 fw-bold text-center mb-5">Previous Events</h2>

        <div className="row justify-content-center align-items-start">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={poster}
                alt="Dayaben.com"
                className="card-img-top"
                style={{ objectFit: 'cover', height: '300px' }}
              />
              <div className="card-body">
                <h3 className="card-title">Dayaben.com</h3>
                <p className="card-text">
                  The story revolves around Dayaben, a simple homemaker living with a husband who considers her naive.
                  Amidst hilarious ups and downs, their journey unfolds in a Tom & Jerry-style comedy packed with laughter
                  and a powerful message on women empowerment.
                  <br /><br />
                  Successfully launched across Canada with multiple shows.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="bg-white p-3 rounded shadow-sm h-100">
              <h4 className="fw-bold mb-3">Reviews</h4>
              <InstagramEmbed url="https://www.instagram.com/reel/DHOVgg5OWt8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrevShows;
