import { createContext, useContext, useState } from 'react';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedCuisine, setSelectedCuisine] = useState(null); 

  return (
    <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe, selectedCuisine, setSelectedCuisine }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
