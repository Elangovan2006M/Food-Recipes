import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { FiSearch } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLogo } from '../Service/LogoContext';
import { useUser } from '../Service/UserContext';
import { FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { logo } = useLogo();
  const { userLoggedIn, userName, userLogout } = useUser(); // useUser context

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = () => {
    navigate('/');
  };

  const handleSearch = () => {
    navigate('/search');
  };

  const handleLogout = () => {
    userLogout();
    navigate('/');
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-brand" onClick={handleNavigate}>
          <img src={logo.imageUrl} alt={logo.imageName} />
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

          {/* Conditional: show SignUp if not logged in, or Username + Logout if logged in */}
          {!userLoggedIn ? (
            <li><a href="/user-register">SignUp</a></li>
          ) : (
            <>
              <li className="nav-username">Hi, {userName}</li>
              <li onClick={handleLogout}><FaSignInAlt /></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
