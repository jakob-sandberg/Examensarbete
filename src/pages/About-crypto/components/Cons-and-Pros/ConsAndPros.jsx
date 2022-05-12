import React from 'react';
import './cons-and-pros.css';

import { BsHandThumbsUpFill } from 'react-icons/bs';

const ConsAndPros = () => {
  return (
    <div className='page-container'>
      <div className='pros-and-cons-container'>
        {/* PROS */}
        <div className='pros-container'>
          <h3>Pros</h3>
          <div className='pros-content'>
            <article className='pros-details'>
              <BsHandThumbsUpFill className='pros-details-icon' />
              <div>
                <h4>Personal Information Privacy</h4>
              </div>
            </article>
            <article className='pros-details'>
              <BsHandThumbsUpFill className='pros-details-icon' />
              <div>
                <h4>Instant and Secure Transfer</h4>
              </div>
            </article>
            <article className='pros-details'>
              <BsHandThumbsUpFill className='pros-details-icon' />
              <div>
                <h4>Anti-Inflation Characteristics</h4>
              </div>
            </article>
            <article className='pros-details'>
              <BsHandThumbsUpFill className='pros-details-icon' />
              <div>
                <h4>No Mediatory</h4>
              </div>
            </article>
          </div>
        </div>

        {/* CONS */}
        <div className='pros-container'>
          <h3>Cons</h3>
          <div className='pros-content'>
            <article className='pros-details'>
              <BsHandThumbsUpFill className='pros-details-icon' />
              <div>
                <h4>Chance of Illegal Activity</h4>
              </div>
            </article>
            <article className='pros-details'>
              <BsHandThumbsUpFill className='pros-details-icon' />
              <div>
                <h4>High Loss Risk</h4>
              </div>
            </article>
            <article className='pros-details'>
              <BsHandThumbsUpFill className='pros-details-icon' />
              <div>
                <h4>Highly Volatile Market</h4>
              </div>
            </article>
            <article className='pros-details'>
              <BsHandThumbsUpFill className='pros-details-icon' />
              <div>
                <h4>Risk of Cyber Hack</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsAndPros;
