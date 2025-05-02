import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipe } from '../Service/RecipeContext';
import { getRecipeById } from '../Service/RecipeService'; // Import getRecipeById
import { incrementRecipeViews } from '../Service/RecipeService';
import '../Styles/TrendingRecipeCard.css';

const TrendingRecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const { setSelectedRecipe } = useRecipe();

  const handleClick = async () => {
    try {
      // Fetch recipe by ID and trigger view tracking from backend
      const response = await getRecipeById(recipe.id);  // Automatically increments views
      await incrementRecipeViews(recipe.id);
      setSelectedRecipe(response.data);  // Still needed for state management
      navigate(`/recipes`);
    } catch (error) {
      console.error("Error fetching recipe", error);
      navigate('/recipes');  // Fallback even if there's an error
    }
  };


  return (
    <div className='trending-recipe-card'>
      <img
        src={recipe.imageUrl || 'https://via.placeholder.com/300'}
        alt={recipe.foodName}
        className="recipe-image"
      />
      <button
        className="view-button"
        onClick={handleClick}
      >
        View <span className='highlight-style'>Recipe</span>
      </button>
    </div>
  );
};

export default TrendingRecipeCard;
