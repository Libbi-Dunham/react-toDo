import React, { useState } from 'react';
import { signInUser, signupUser } from '../../services/users';
import AuthForm from '../../components/AuthForm/AuthForm';
import classNames from 'classnames';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (type === 'signin') {
        response = await signInUser(email, password);
      } else {
        response = await signupUser(email, password);
      }
      setCurrentUser(response);
    } catch {
      setError('Oh No! Try Again!');
    }
  };

  return (
    <div>
      <div className="links">
        <h2
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin ' })}
        >
          Sign In
        </h2>
        <h2
          onClick={() => {
            setType('signup');
          }}
          className={classNames({ active: type === 'signup' })}
        >
          Sign Up
        </h2>
      </div>
      <p>Enter: {type}</p>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
