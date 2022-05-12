import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/coins.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      <Link to='/' className='navbar-brand'>
        <div className='footer-logo-container'>
          <img className='footer-logo' alt='logo' src={logo} />
          <span className='footer-heading'>CryptoMania</span>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
