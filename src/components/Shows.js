import React from 'react';
import '../styles.css';
import poster from '../assets/images/poster.jpg';

const Shows = () => {
  return (
    <section id="upcoming-shows" className="section">
      
      <h2>Upcoming Shows</h2>
      <div className="show">
        <img src={poster} alt='poster'></img>
        <h3>Dayaben.com</h3>
        <p> Calgary - Chinese Cultural Center <br>
        </br> Date:March 8, 2025 7:00 pm (MST) <br></br> <a href="https://allevents.in/calgary/dayaben-dot-com/80004136077556?ref=quicksearch-event-results">Tickets</a></p>
        <p> Edmonton - Christ the Way Seventh Day Adventist Church <br>
        </br> Date:March 9, 2025 4:30 pm (MST)  <br></br> <a href="https://allevents.in/edmonton/dayaben-dot-com/80001223886284">Tickets</a></p>
        <p> Vaughn - City Playhouse <br>
        </br> Date:March 14, 2025 4:00 pm (EST) and second show 8:00 pm (EST)  <br></br> <a href="https://tickets.cityplayhouse.ca/event/655:438/">Tickets</a></p>
        <p> Hamilton - Mcintyre Perfoming Arts Center <br>
        </br> Date:March 16, 2025 4:00 pm (EST)  <br></br> <a href="https://ci.ovationtix.com/36734/performance/11587282">Tickets</a></p>
        <p> London - Wolf Performance Hall <br>
        </br> Date:March 23, 2025 4:00 pm (EST)  <br></br> <a href="https://allevents.in/london/dayaben-dot-com/80003404619945">Tickets</a></p>
        <p> Mississauga - Meadowvale Theatre <br>
        </br> Date:March 30, 2025 3:00 pm (EST)  <br></br> <a href="https://www.ticketmaster.ca/event/10006238B1452448">Tickets</a><br></br>
        Date:March 30, 2025 7:00 pm (EST)<br></br><a href="https://www.ticketmaster.ca/event/10006238B1732450">Tickets</a></p>



        
        <p> The story revolves around Dayaben who is a simple homemaker and lives with her husband who considered her Naive.



The story line amid ups and downs, unfolds in an entertaining Tom and Jerry style entertainment on Dayaben dot com.



This hilarious comedy journey will bring you laughter and also have an important social message on woman empowerment, this show is a huge global success and is performed by prominent actors from Gujarati drama and movie Industry. 
        </p>
        
      </div>
    </section>
  );
}

export default Shows;
