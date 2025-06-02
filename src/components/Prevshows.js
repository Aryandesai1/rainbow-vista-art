import React from 'react';
import '../styles.css';
import poster from '../assets/images/poster.jpg';
import InstagramEmbed from './InstagramEmbed';

const PrevShows = () => {
  return (
    <section id="previous-shows" className="section">
      
      <h2>Previous Events</h2>
      <div className="show">
        <img src={poster} alt='poster'></img>
        <h1>Dayaben.com</h1>
        


        
        <p> The story revolves around Dayaben who is a simple homemaker and lives with her husband who considered her Naive.



The story line amid ups and downs, unfolds in an entertaining Tom and Jerry style entertainment on Dayaben dot com.



This hilarious comedy journey will bring you laughter and also have an important social message on woman empowerment, we successfully launched this drama with multiple shows across Canada. 
        </p>

        <div className="reel-gallery">
            <h1>Reviews</h1>
        <InstagramEmbed url="https://www.instagram.com/reel/DHOVgg5OWt8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
      </div>
      </div>
    </section>
  );
}

export default PrevShows;
