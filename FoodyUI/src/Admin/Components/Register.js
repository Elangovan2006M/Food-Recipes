import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { TiLockClosed, TiLockOpen } from 'react-icons/ti';
import { registerAdmin } from '../Service/AdminService';
import '../Styles/Register.css';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const result = await registerAdmin(userName, email, password); 

    if (result.success) {
      alert(result.message);
      navigate('/login');
    } else {
      alert(result.message);
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
                type='text'
                placeholder='Enter your name'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <FaUserAlt className='inputicon' />
            </div>

            <label>Email</label>
            <div className='input-with-icon'>
              <input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                required
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
            Already have an account? <a href='/login'>Login</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
