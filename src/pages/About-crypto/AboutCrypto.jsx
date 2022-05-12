import React from 'react';
import AboutHeader from './components/About-header/AboutHeader';
import AboutInfo from './components/AboutInfo/AboutInfo';
import '../../App.css';
import ConsAndPros from './components/Cons-and-Pros/ConsAndPros';
import PopularCoins from './components/Popular-coins/PopularCoins';
import Contact from './components/Trade/Trade';

const AboutCrypto = () => {
  return (
    <div className='about-crypto-page'>
      <AboutHeader />
      <AboutInfo />
      <ConsAndPros />
      <PopularCoins />
      <Contact />
    </div>
  );
};

export default AboutCrypto;
