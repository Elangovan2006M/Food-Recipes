import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './Service/RecipeContext';
import Home from './Components/Home';
import RecipeSearch from './Components/RecipeSearch';
import RecipeDisplay from './Components/RecipeDisplay';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <RecipeProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<RecipeSearch />} />
        <Route path="/recipe" element={<RecipeDisplay />} />
      </Routes>
      <Footer/>
    </RecipeProvider>
  );
};

export default App;