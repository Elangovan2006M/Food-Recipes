import React, { useState } from 'react';
import '../Styles/UserEntry.css';
import { useNavigate } from 'react-router-dom';
import { createUser, getUserByEmail } from '../Service/UserService';

const UserRegister = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // First check if user already exists
      const existingUser = await getUserByEmail(email);
      if (existingUser?.data?.email) {
        alert("An account with this email already exists.");
        return;
      }
    } catch (err) {
      // 404 Not Found is expected if user doesn't exist — continue registration
      if (err.response?.status !== 404) {
        console.error("Error checking email:", err);
        alert("Something went wrong. Try again later.");
        return;
      }
    }

    try {
      const newUser = {
        userName,
        email,
        password,
        createdAt: "" // Server will fill this
      };
      createUser(newUser);
      alert("Registration successful!");
      navigate('/user-login');
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Failed to register user.");
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="auth-overlay">
      <div className="auth-box">
        <button className="close-btn" onClick={handleBack} aria-label="Close">&times;</button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="auth-input"
          />
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
          <button type="submit" className="auth-btn">Sign Up</button>
         <p style={{marginLeft:"15%"}}> Already have account <a href="user-login">SignIn</a></p>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
