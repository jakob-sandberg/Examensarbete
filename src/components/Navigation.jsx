import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { UserContext } from '../context/UserContext';

import '../css/Nav.css';
import logo from '../assets/coins.png';

const Navigation = () => {
  const { logout, activeUser } = useContext(UserContext);

  return (
    <div className='navbar-container'>
      <Navbar expand='sm' variant='dark'>
        <Container>
          <Link to='/' className='navbar-brand'>
            <div className='logo-container'>
              <img className='logo' alt='logo' src={logo} />
              <span className='nav-heading'>CryptoMania</span>
            </div>
          </Link>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <div className='links'>
                <NavLink to='/about-crypto' className='nav-link'>
                  <span className='nav-span'>What is Crypto?</span>
                </NavLink>
                <NavLink to='/trending' className='nav-link'>
                  <span className='nav-span'>Trending</span>
                </NavLink>
                {activeUser ? (
                  <React.Fragment>
                    <Nav.Link as={Link} to='/profile' className='nav-link'>
                      <span className='nav-span'>My Coins</span>
                    </Nav.Link>
                    <Nav.Link
                      eventKey='4'
                      as={Link}
                      to='/'
                      onClick={logout}
                      className='nav-link'
                    >
                      <span className='nav-span'>Log out</span>
                    </Nav.Link>
                  </React.Fragment>
                ) : (
                  <Nav.Link
                    eventKey='5'
                    as={Link}
                    to='/login'
                    className='nav-link'
                  >
                    <span className='nav-span'>Log in</span>
                  </Nav.Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
