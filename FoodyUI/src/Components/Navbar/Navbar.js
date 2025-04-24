import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <h2 className='nav-header'>PlateStream</h2>
            <ul className='nav-content'>
                <li><a href='\'>Home</a></li>
                <li><a href='\'>Recipes</a></li>
                <li><a href='\'>Blog</a></li>
                <li><a href='\'>About Us</a></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar