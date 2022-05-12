import React from 'react'
import './about-header.css'
import { GiDigitalTrace } from 'react-icons/gi'
import { FaPeopleArrows } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa'

const AboutHeader = () => {
  return (
    <div className='about-header-container'>
      <h1 className='about-heading'>What is Cryptocurrency?</h1>

      <h3>Quick Guide </h3>

      <div className='cards-container'>

      <div className='what-is-cards'>
      <article className="what-card">
        <GiDigitalTrace className='icon' />
        <p>Cryptocurrency is digital noney created from code.</p>
      </article>

      </div>
      <div className='what-is-cards'>
      <article className="what-card">
        <FaPeopleArrows className='icon' />
        <p>The cryptocurrency economy is monitored by a peer-to-peer internet protocol</p>
      </article>
        
      </div>
      <div className='what-is-cards'>
      <article className="what-card">
        <FaLaptopCode className='icon' />
        <p>Cryptocurrency is an encrypted string of data or a hash, encoded to signify. One unit of currency.</p>
      </article>

      </div>
      </div>
    </div>
  )
}

export default AboutHeader