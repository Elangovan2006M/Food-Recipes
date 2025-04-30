import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './Service/RecipeContext';
import RecipeSearch from './Components/RecipeSearch';
import RecipeDisplay from './Components/RecipeDisplay';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Recipe from './Components/Recipe';

const App = () => {
  return (
    <RecipeProvider>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<RecipeSearch />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipes" element={<RecipeDisplay />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
     
      <Footer/>
    </RecipeProvider>
  );
};

export default App;