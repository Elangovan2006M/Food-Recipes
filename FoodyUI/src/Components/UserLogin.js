import React, { useState } from 'react';
import '../Styles/UserEntry.css';
import { useNavigate } from 'react-router-dom';
import { getUserByEmail } from '../Service/UserService';
import { useUser } from '../Service/UserContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { userLogin } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getUserByEmail(email);
      const user = response.data;

      if (user.password === password) {
        // Successful login
        userLogin(user.id,user.userName);
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      if (error.response?.status === 404) {
        alert('User not found. Please check your email.');
      } else {
        console.error('Login failed:', error);
        alert('Something went wrong. Please try again later.');
      }
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="auth-overlay">
      <div className="auth-box">
        <button className="close-btn" onClick={handleBack} aria-label="Close">
          &times;
        </button>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="auth-input"
          />
          <button type="submit" className="auth-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
