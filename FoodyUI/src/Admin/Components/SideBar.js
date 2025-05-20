import React, { useState } from 'react';
import '../Styles/SideBar.css';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  const gotoRegister=()=>{
    navigate('/register');
  }

  return (
    <>
      <div className="sidebar">
        <nav>
          <a href="/ps-dashboard">Dashboard</a>
          <a href="/ps-recipes">Manage Recipes</a>
          <a href="/ps-blogs">Manage Blogs</a>
          <a href="/ps-contact">Contact Links</a>
          <a href="/ps-assets">Manage Assets</a>
          <a href="/ps-subscribe">Subscribe Emails</a>
          <button className='add-new-admin' onClick={()=>gotoRegister()}>New Admin</button>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
