import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipe } from '../Service/RecipeContext';
import { getRecipeById, incrementRecipeViews } from '../Service/RecipeService';
import '../Styles/TrendingRecipeCard.css';

const TrendingRecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const { setSelectedRecipe } = useRecipe();

  const handleClick = async () => {
    try {
      await incrementRecipeViews(recipe.id);
      setSelectedRecipe(recipe);
      navigate('/recipes');
    } catch (error) {
      console.error("Error fetching recipe", error);
      navigate('/recipes');
    }
  };

  return (
    <div className='trending-recipe-card' onClick={handleClick}>
      <div className='image-container'>

        <img
          src={recipe.imageUrl || 'https://via.placeholder.com/300'}
          alt={recipe.foodName}
          className="recipe-image"
          />
          <div className='image-overlay'></div>
        <button className="trending-view-button">
          View <span className='highlight-style'>Recipe</span>
        </button>
      </div>
    </div>
  );
};

export default TrendingRecipeCard;
