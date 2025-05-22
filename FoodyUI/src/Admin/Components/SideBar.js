import React, { useState, useEffect } from 'react';
import '../Styles/SideBar.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Service/AuthContext';
import { PiHandWavingThin } from "react-icons/pi";

const SideBar = () => {
  const navigate = useNavigate();

  const gotoRegister=()=>{
    navigate('/register');
  }
  const { logout }=useAuth();

  const Logout=()=>{
    logout();
    navigate('/login')
  }

  const [userName, setUserName] = useState('');
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if(storedUserName) {
      setUserName(storedUserName);
    }
  },[]);

  return (
    <>
      <div className="sidebar">
        <nav>
          <h2 style={{color:"white",paddingRight:"40px"}}><PiHandWavingThin /> Hi, {userName}</h2>
          <button className='add-new-admin' onClick={()=>Logout()}>LogOut</button>
          <a href="/ps-dashboard">Dashboard</a>
          <a href="/ps-recipes">Manage Recipes</a>
          <a href="/ps-blogs">Manage Blogs</a>
          <a href="/ps-contact">Contact Links</a>
          <a href="/ps-assets">Manage Assets</a>
          <a href="/ps-subscribe">Subscribed Emails</a>
          <a href='/ps-review'>Recipe Reviews</a>
          <a href='/ps-users'>Manage Users</a>
          <button className='add-new-admin' onClick={()=>gotoRegister()}>New Admin</button>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
