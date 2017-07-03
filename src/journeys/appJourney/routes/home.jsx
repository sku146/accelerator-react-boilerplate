import React from 'react';
import copyProvider from 'copies/appJourney';

const getCopy = copyProvider.getResource;

const Home = () => (
  <div className="home-page">
    <h1>{getCopy('home.title')}</h1>
    <h3>{getCopy('home.subtitle')}</h3>
  </div>
);

export default Home;
