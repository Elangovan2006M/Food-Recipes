import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
  const [userName, setUserName] = useState(localStorage.getItem('userName') || null);
  const [userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('userLoggedIn') === 'true');

  useEffect(() => {
    localStorage.setItem('userId', userId || '');
    localStorage.setItem('userName', userName || '');
    localStorage.setItem('userLoggedIn', userLoggedIn);
  }, [userId, userName, userLoggedIn]);

  const userLogin = (id, name) => {
    setUserId(id);
    setUserName(name);
    setUserLoggedIn(true);
  };

  const userLogout = () => {
    setUserId(null);
    setUserName(null);
    setUserLoggedIn(false);
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.setItem('userLoggedIn', 'false');
  };

  return (
    <UserContext.Provider value={{ userId, userName, userLoggedIn, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
