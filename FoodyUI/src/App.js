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
import Login from './Admin/Components/Login';
import SideBar from './Admin/Components/SideBar';
import Register from './Admin/Components/Register';
import ContactPage from './Admin/Components/ContactPage';
import AssetsPage from './Admin/Components/AssetsPage';
import SubscribePage from './Admin/Components/SubscribePage';
import Dashboard from './Admin/Components/DashBoard';
import BlogPage from './Admin/Components/BlogPage';
import { useAuth } from './Admin/Service/AuthContext';
import ReviewPage from './Admin/Components/ReviewPage';
import { UserProvider } from './Service/UserContext';
import UserRegister from './Components/UserRegister';
import UserLogin from './Components/UserLogin';


const AppContent = () => {
  const { loading: logoLoading } = useLogo();
  const { loading: socialLoading } = useSocialMedia();
  const { isLoggedIn } = useAuth();

  if (logoLoading || socialLoading) {
    return (
      <div className="loading-container">
        <img src="/spinner.gif" alt="Loading..." />
      </div>
    );
  }

  return (
    <>
      <Routes>
        {/* Public Routes */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/search" element={<><Navbar /><RecipeSearch /><Footer /></>} />
          <Route path="/recipe" element={<><Navbar /><Recipe /><Footer /></>} />
          <Route path="/recipes" element={<><Navbar /><RecipeDisplay /><Footer /></>} />
          <Route path="/blogs" element={<><Navbar /><Blog /><Footer /></>} />
          <Route path="/blogs/view" element={<><Navbar /><BlogRecipePage /><Footer /></>} />
          <Route path="/aboutus" element={<><Navbar /><AboutUs /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/user-register" element={<><Navbar /><Home /><UserRegister/><Footer /></>} />
          <Route path="/user-login" element={<><Navbar /><Home /><UserLogin/><Footer /></>}/>

        <Route path="/login" element={<Login />} />

        {isLoggedIn && (
          <>
            <Route path="/ps-dashboard" element={<Dashboard />} />
            <Route path="/ps-recipes" element={<RecipePage />} />
            <Route path="/ps-contact" element={<ContactPage />} />
            <Route path="/ps-assets" element={<AssetsPage />} />
            <Route path="/ps-subscribe" element={<SubscribePage />} />
            <Route path="/ps-blogs" element={<BlogPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ps-review" element={<ReviewPage/>} />
          </>
        )}
      </Routes>
    </>
  );
};


const App = () => {
  return (
    <UserProvider>
    <BlogProvider>
        <LogoProvider>
        <RecipeProvider>
          <SocialMediaProvider>
               <AppContent />
          </SocialMediaProvider>
        </RecipeProvider>
      </LogoProvider>
    </BlogProvider>
    </UserProvider>
  );
};

export default App;
