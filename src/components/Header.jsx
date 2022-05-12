import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header>
      <div className='content'>
        <hgroup>
          <h1>CryptoMania</h1>
          <i>Your guide in the crypto market!</i>
        </hgroup>
      </div>
    </header>
  );
};

export default Header;
