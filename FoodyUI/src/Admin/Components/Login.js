import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { TiLockOpen, TiLockClosed } from "react-icons/ti";

import '../Styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e) =>
    {
        e.preventDefault();
        if(email === 'admin@example.com' && password === 'Admin@123')
        {
            navigate('/ps-dashboard');
        }
        else
        {
            alert("Invalid credentials");
        }
    }
  return (
    <div className='admin-login'>
        <h2 className='admin-login-heading'>Welcome <span className='highlight-style'>Admin!</span></h2>
        <p>Please Login to continue...</p>
        <div className='login-container'>
            <div className='login-box'>
                <form onSubmit={handleLogin}>
                    <label>Username</label>
                    <div className='input-with-icon'>
                        <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <FaUserAlt className='inputicon'/>
                    </div>
                    <label>Password</label>
                    <div className='input-with-icon'>
                        <input type={(showPassword) ?'text' : 'password'} placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <span className='inputicon toggle-icon' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <TiLockOpen/> : <TiLockClosed/>}</span>
                    </div>

                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login