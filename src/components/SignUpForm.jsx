import React, { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Container, Form } from 'react-bootstrap';

import styles from '../css/login.module.css';

import ModalWindow from './ModalWindow';

const SigUpForm = () => {
  const history = useHistory();
  const { createUser, setActiveUser } = useContext(UserContext);
  const location = useLocation();

  const [signUpDone] = useState(false);
  const [signUpFail, setSignUpFail] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    let newUser = {
      email,
      password,
      name
    };
    let result = await createUser(newUser);
    if (!result.error && location.pathname === '/login') {
      setActiveUser(result);
      history.push('/');
    }
    if (!result.error && location.pathname !== '/login') {
      setActiveUser(result);
    } else if (result.error) {
      setSignUpFail(true);
    }
  };

  let modalValues = {
    booleanValue: signUpFail,
    toggleBoolean: setSignUpFail,
    modalText: 'This email is already registered'
  };

  return (
    <div className={styles.registerContainer}>
      <h1 className='header'>Be a CryptoManiac today!</h1>
      <Container className='containerStyle'>
        {signUpDone ? (
          <div className='confirmationDiv'>
            <h1>You have been registred!!</h1>
          </div>
        ) : (
          <div>
            <p className='registerformtext'>Register your account</p>
            <div className='registerform'>
              <Form onSubmit={(e) => registerSubmitHandler(e)}>
                <Form.Group controlId='formBasicUsername'>
                  <Form.Control
                    className={styles.inputField}
                    size='lg'
                    htmlFor='handleName'
                    type='name'
                    placeholder='Username'
                    required
                    onChange={handleNameChange}
                  />
                </Form.Group>

                <Form.Group controlId='formBasicEmail'>
                  <Form.Control
                    className={styles.inputField}
                    size='lg'
                    htmlFor='handleEmail'
                    type='email'
                    placeholder='E-mail'
                    required
                    onChange={handleEmailChange}
                  />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Control
                    className={styles.inputField}
                    size='lg'
                    htmlFor='handlePassword'
                    type='password'
                    placeholder='Password'
                    required
                    onChange={handlePasswordChange}
                    //IMPORTANT (?=.*\d) only needs one backslash in html attribute but (?=.*\\d) two backslashes in Javascript
                    pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$'
                  />
                </Form.Group>
                <div className='regarea'>
                  <button
                    className={styles.singInButton}
                    variant='warning'
                    type='submit'
                  >
                    Register
                  </button>
                </div>
              </Form>
              {}{' '}
            </div>
            <ModalWindow modalValues={modalValues} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default SigUpForm;
