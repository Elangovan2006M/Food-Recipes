import { createContext, useContext, useState } from 'react';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedCuisine, setSelectedCuisine] = useState(null); 
  const [selectedFoodType, setSelectedFoodType] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  return (
    <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe, selectedCuisine, setSelectedCuisine, selectedFoodType, setSelectedFoodType, selectedDifficulty, setSelectedDifficulty, selectedTime, setSelectedTime }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
