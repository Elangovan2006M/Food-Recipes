import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken') || null);
  const [adminName, setAdminName] = useState(localStorage.getItem('adminName') || null);
  const [adminRole, setAdminRole] = useState(localStorage.getItem('adminRole') || null);
  const [adminLoggedIn, setAdminLoggedIn] = useState(localStorage.getItem('adminToken') !== null);

  useEffect(() => {
    if (adminToken) {
      localStorage.setItem('adminToken', adminToken);
      localStorage.setItem('adminName', adminName || '');
      localStorage.setItem('adminRole', adminRole || '');
    } else {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminName');
      localStorage.removeItem('adminRole');
    }
  }, [adminToken, adminName, adminRole]);

  const adminLogin = (token, name, role) => {
    setAdminToken(token);
    setAdminName(name);
    setAdminRole(role);
    setAdminLoggedIn(true);
  };

  const adminLogout = () => {
    setAdminToken(null);
    setAdminName(null);
    setAdminRole(null);
    setAdminLoggedIn(false);
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
    localStorage.removeItem('adminRole');
  };

  return (
    <AdminContext.Provider value={{ adminToken, adminName, adminRole, adminLoggedIn, adminLogin, adminLogout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
