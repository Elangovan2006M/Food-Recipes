import React, { useState } from 'react';
import '../Styles/SideBar.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <nav>
          <a href="/ps-dashboard">Dashboard</a>
          <a href="/ps-recipes">Manage Recipes</a>
          <a href="/ps-blogs">Manage Blogs</a>
          <a href="/ps-contact">Contact Links</a>
          <a href="/ps-assets">Manage Assets</a>
          <a href="/ps-subscribe">Subscribe Emails</a>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
