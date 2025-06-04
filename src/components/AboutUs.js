import React from 'react';
import '../index.css'; // Assuming you have a global CSS file for styles

const AboutUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
        About Us
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
        We are <span className="font-semibold text-purple-600 dark:text-purple-400">Rainbow Vista Art</span>, dedicated to vibrant theatrical performances, music concerts, cultural celebrations, and destination events that inspire and connect audiences across India and Canada.
      </p>
    </section>
  );
};

export default AboutUs;
