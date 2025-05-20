import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { TiLockClosed, TiLockOpen } from 'react-icons/ti';
import axios from 'axios';

import '../Styles/Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/admin-user/register', {
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        alert('Registration successful!');
        navigate('/admin-login');
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  return (
    <div className='admin-register'>
      <h2 className='admin-register-heading'>
        Welcome <span className='highlight-style'>Admin!</span>
      </h2>
      <p>Please Register to Login...</p>
      <div className='register-container'>
        <div className='register-box'>
          <form onSubmit={handleRegister}>
            <label>Username</label>
            <div className='input-with-icon'>
              <input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaUserAlt className='inputicon' />
            </div>

            <label>Password</label>
            <div className='input-with-icon'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className='inputicon toggle-icon'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <TiLockOpen /> : <TiLockClosed />}
              </span>
            </div>

            <button type='submit'>Register</button>
          </form>
          <h3>
            Already have an account? <a href='/admin-login'>Login</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
