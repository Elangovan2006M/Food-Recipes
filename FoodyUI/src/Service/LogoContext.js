import { createContext, useContext, useState, useEffect } from 'react';
import { getAllLogos } from './LogoService';

const LogoContext = createContext();

export const LogoProvider = ({ children }) => {
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await getAllLogos();
        const data = await response.data;
        if (data && data.length > 0) {
          setLogo(data[0]);
        }
      } catch (error) {
        console.error('Error loading logo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogo();
  }, []);

  return (
    <LogoContext.Provider value={{ logo, setLogo, loading }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => useContext(LogoContext);
