import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './Service/RecipeContext';
import RecipeSearch from './Components/RecipeSearch';
import RecipeDisplay from './Components/RecipeDisplay';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <RecipeProvider>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeSearch />} />
          <Route path="/recipe" element={<RecipeDisplay />} />
        </Routes>
      </Router>
      <Footer/>
    </RecipeProvider>
  );
};

export default App;