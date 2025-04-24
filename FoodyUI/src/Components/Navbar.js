import React, { useState } from 'react';
import '../Styles/Navbar.css';
import {FiSearch} from 'react-icons/fi';
import {FaBars, FaTimes} from 'react-icons/fa';
import PlateStream from '../Assests/Platestream.png'




const Navbar = () => {
const[isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMobileMenu = () =>
{
  setIsMobileMenuOpen(!isMobileMenuOpen);
}

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-brand">
          <img src={PlateStream} alt="logo" />
          <h2 className="nav-header">PlateStream</h2>
        </div>
        <div className={`nav-content ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/">Recipes</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">About Us</a></li>
        <div className='nav-search'>
          <input type='search' placeholder='Search'/>
          <FiSearch className='search-icon'/>
        </div>
        <div className='hamburger' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes/> : <FaBars/>}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
