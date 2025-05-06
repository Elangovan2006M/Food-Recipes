import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './Service/RecipeContext';
import { BlogProvider } from './Service/BlogContext';
import RecipeSearch from './Components/RecipeSearch';
import RecipeDisplay from './Components/RecipeDisplay';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Recipe from './Components/Recipe';
import BlogRecipePage from './Components/BlogRecipePage';

const App = () => {
  return (
    <RecipeProvider>
      <BlogProvider>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<RecipeSearch />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipes" element={<RecipeDisplay />} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/blogs/view" element={<BlogRecipePage/>}/>
        </Routes>
      
        <Footer/>
      </BlogProvider>
    </RecipeProvider>
  );
};

export default App;