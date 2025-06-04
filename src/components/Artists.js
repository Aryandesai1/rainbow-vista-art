import React from 'react';
import artist1 from '../assets/images/Pratima_T.png';
import artist2 from '../assets/images/Jitu_Kotak.png';
import artist3 from '../assets/images/Yohanna_Vachhani.png';
import artist4 from '../assets/images/Yunus_Patel.png';
import artist5 from '../assets/images/Hitesh_Parekh.png';
import artist6 from '../assets/images/Munir_Khan.png';

const artists = [
  { name: 'Pratima T', img: artist1 },
  { name: 'Jitu Kotak', img: artist2 },
  { name: 'Yohana Vachhani', img: artist3 },
  { name: 'Yunus Patel', img: artist4 },
  { name: 'Hitesh Parekh', img: artist5 },
  { name: 'Munir Khan', img: artist6 },
];

const Artists = () => {
  return (
    <section id="artists" className="py-5 bg-body text-body">
      <div className="container">
        <h2 className="display-5 fw-bold text-center mb-5">Our Artists</h2>
        <div className="row justify-content-center">
          {artists.map((artist, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 mb-4 d-flex justify-content-center">
              <div className="text-center">
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="rounded-circle border"
                  style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    marginBottom: '0.75rem',
                  }}
                />
                <h6 className="text-uppercase fw-semibold">{artist.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
