import React from 'react';
import '../Styles/Navbar.css';
import {FiSearch} from 'react-icons/fi'
import PlateStream from '../Assests/Platestream.png'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-brand">
          <img src={PlateStream} alt="logo" />
          <h2 className="nav-header">PlateStream</h2>
        </div>
        <ul className="nav-content">
          <li><a href="/">Home</a></li>
          <li><a href="/">Recipes</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">About Us</a></li>
        <div className='nav-search'>
          <input type='search' placeholder='Search'/>
          <FiSearch className='search-icon'/>
        </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
