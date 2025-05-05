import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipe } from '../Service/RecipeContext';
import { incrementRecipeViews } from '../Service/RecipeService';
import '../Styles/RecipeCard.css';
import { IoTimeOutline } from "react-icons/io5";
import { PiCookingPotLight } from "react-icons/pi";
import { GrSteps } from "react-icons/gr";

const RecipeCard = ({ recipe }) => {

  const navigate = useNavigate();
  const { setSelectedRecipe } = useRecipe();

  const handleClick = async () => {
    try {
      await incrementRecipeViews(recipe.id);
      setSelectedRecipe(recipe);
      navigate('/recipes');
    }
    catch(error) {
      console.log("Failed to update view count: ", error);
    }
  };

  return (
    <div className="recipe-card">
      <img
        src={recipe.imageUrl || 'https://via.placeholder.com/300'}
        alt={recipe.foodName}
        className="recipe-image"
      />
      <div className="recipe-details">
        <div className="recipe-header">
          <h4>{recipe.foodName}</h4>
          <button
            className="view-button"
            onClick={handleClick}
          >
            View
          </button>
        </div>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-info">
          <span><IoTimeOutline className='icons' />{recipe.prepTime} min</span>
          <span><PiCookingPotLight className='icons'/>{recipe.cookTime} min</span>
          <span><GrSteps className='icons' />{recipe.difficulty}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;