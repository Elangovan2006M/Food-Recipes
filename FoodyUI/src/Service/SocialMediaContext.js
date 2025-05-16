import { createContext, useContext, useState, useEffect } from 'react';
import { getAllSocialMedia } from './SocialMediaService';

const SocialMediaContext = createContext();

export const SocialMediaProvider = ({ children }) => {
  const [facebook, setFacebook] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [mail, setMail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        const response = await getAllSocialMedia();
        const data = await response.data;

        if (data && data.length > 0) {
          setFacebook(data.find(item => item.name === 'Facebook') || null);
          setInstagram(data.find(item => item.name === 'Instagram') || null);
          setTwitter(data.find(item => item.name === 'Twitter') || null);
          setMail(data.find(item => item.name === 'Mail') || null);
        }
      } catch (error) {
        console.error('Error loading social media data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialMedia();
  }, []);

  return (
    <SocialMediaContext.Provider
      value={{
        facebook,
        instagram,
        twitter,
        mail,
        loading,
        setFacebook,
        setInstagram,
        setTwitter,
        setMail
      }}
    >
      {children}
    </SocialMediaContext.Provider>
  );
};

export const useSocialMedia = () => useContext(SocialMediaContext);
