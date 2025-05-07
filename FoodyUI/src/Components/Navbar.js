import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { FiSearch } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
import PlateStream from '../Assests/Platestream.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = () => {
    navigate('/');
  };

  const handleSearch = () => {
    navigate('/search');
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-brand" onClick={handleNavigate}>
          <img src={PlateStream} alt="logo" />
          <h2 className="nav-header">PlateStream</h2>
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/recipe">Recipes</a></li>
          <li><a href="/blogs">Blog</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li className="mobile-search">
            <FiSearch className="search-icon" onClick={handleSearch} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
