import { createContext, useContext, useState, useEffect } from 'react';
import { getAllLogos } from './LogoService';

const LogoContext = createContext();

export const LogoProvider = ({ children }) => {
  const [logo, setLogo] = useState(null);
  const [homeBanner, setHomeBanner] = useState(null);
  const [aboutUsBanner, setAboutUsBanner] = useState(null);
  const [blogBanner, setBlogBanner] = useState(null);
  const [roundLogo, setRoundLogo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await getAllLogos();
        const data = await response.data;
        
        if (data && data.length > 0) {
          setLogo(data.find(item => item.imageName === 'logo') || null);
          setHomeBanner(data.find(item => item.imageName === 'HomeBanner') || null);
          setAboutUsBanner(data.find(item => item.imageName === 'AboutUsBanner') || null);
          setBlogBanner(data.find(item => item.imageName === 'BlogBanner') || null);
          setRoundLogo(data.find(item => item.imageName === 'RoundLogo') || null);
        }
      } catch (error) {
        console.error('Error loading logos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  return (
    <LogoContext.Provider
      value={{
        logo,
        homeBanner,
        aboutUsBanner,
        blogBanner,
        roundLogo,
        setLogo,
        setHomeBanner,
        setAboutUsBanner,
        setBlogBanner,
        setRoundLogo,
        loading
      }}
    >
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => useContext(LogoContext);
