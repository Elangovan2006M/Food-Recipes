import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './Service/RecipeContext';
import { BlogProvider } from './Service/BlogContext';
import { LogoProvider, useLogo } from './Service/LogoContext';
import { SocialMediaProvider,useSocialMedia } from './Service/SocialMediaContext';
import { useState } from 'react';
import Recipe from './Components/Recipe';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import RecipeSearch from './Components/RecipeSearch';
import RecipeDisplay from './Components/RecipeDisplay';
import Blog from './Components/Blog';
import BlogRecipePage from './Components/BlogRecipePage';
import AboutUs from './Components/About';
import Contact from './Components/Contact';
import RecipePage from './Admin/Components/RecipePage';
import SideBar from './Admin/Components/SideBar';

const AppContent = () => {
  const { loading: logoLoading } = useLogo();
  const { loading: socialLoading } = useSocialMedia();
  const [admin, setAdmin] = useState(true);

  if (logoLoading || socialLoading) {
    return (
      <div className="loading-container">
        <img src="/spinner.gif" alt="Loading..." />
      </div>
    );
  }

  return (
    <>
    {admin ?(
      <>
      <SideBar/>
        <Routes>
          <Route path="/ps-recipes" element={<RecipePage />} />
        </Routes>
      </>
    ):(
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<RecipeSearch />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipes" element={<RecipeDisplay />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/view" element={<BlogRecipePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    )}
    </>
  );
};


const App = () => {
  return (
    <BlogProvider>
        <LogoProvider>
        <RecipeProvider>
          <SocialMediaProvider>
              <AppContent />
          </SocialMediaProvider>
        </RecipeProvider>
      </LogoProvider>
    </BlogProvider>
  );
};

export default App;
