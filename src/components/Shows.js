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
        <p> Date:tdb  Location:tdb</p>
        <p> Daya Ben is a simple homemaker, who is always engrossed in household chores. Her husband Amit considers her naive. Their college-going son Pratik enjoys his carefree life. Brother-in-law Falgun and sister-in-law Meghna work in corporate jobs. Meghna, with her beauty, good job, and salary, always overshadows Daya, creating a constant sense of inferiority. Falgun is a henpack husband. Daya's status within the household is lower than that of the domestic help. Daya is consistently taunted like a football by everyone. Upset, she tells her son that no one respects her at home. In response, Pratik suggests letting everyone live in their own space and not interfering in others' matters. Disheartened, Daya pleads to God, questioning where her space is if everyone is allowed to live in their own. Suddenly, a voice from the oracle declares that Dayaa logon kaa toh time aata hai, tumhara toh zamaana aayega...

In a twist, a call from the police station informs them that Pratik has been caught consuming drugs behind the college. When they visit the police station, a hoodlum breaks open a lockup and starts running. He grabs the inspector's gun, places it on Amit's head, and attempts to escape after making him a hostage. Amid the crisis, Daya transforms into a fierce Durga to save her husband. She confronts the troublemaker and ensures Amit's safety. The story takes a turn when a video of Daya in her fierce avatar goes viral.

Overnight, Daya becomes a celebrity, invited as a chief guest and motivational speaker. She gains status and wealth. Falgun and Pratik join her, and even Falgun secures an exclusive contract with Dayaben.The situation changes completely, leaving Amit and Meghna envious. Despite their attempts to humiliate Daya, her graph continues to rise. The storyline, amid the ups and downs, unfolds in an entertaining Tom and Jerry style on Dayaben.com.

This narrative serves as a reminder that just because a woman chooses to take care of her family and stays in the background doesn't mean she is incapable. "Dayaben.com" is a light social comedy challenging stereotypes about housewives, who are the foundation of our society.
        </p>
        
      </div>
    </section>
  );
}

export default Shows;
