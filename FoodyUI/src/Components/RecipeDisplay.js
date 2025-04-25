import React from 'react';
import { useRecipe } from '../Service/RecipeContext';
import '../Styles/RecipeDisplay.css';

const RecipeDisplay = () => {
  const { selectedRecipe } = useRecipe();

  if (!selectedRecipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="recipe-container">
      <h2 className="title">{selectedRecipe.foodName}</h2>
      <div className="recipe-content">
        <img src={selectedRecipe.imageUrl || 'https://via.placeholder.com/150'} alt={selectedRecipe.foodName} className="recipe-image" />
        <div className="recipe-details">
          <p><strong>Cuisine:</strong> {selectedRecipe.cuisines}</p>
          <p><strong>Type:</strong> {selectedRecipe.foodType}</p>
          <p><strong>Difficulty:</strong> {selectedRecipe.difficulty}</p>
          <p><strong>Time:</strong> {selectedRecipe.totalTime} min</p>
          <p>{selectedRecipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDisplay;