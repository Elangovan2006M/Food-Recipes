import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipe } from '../Service/RecipeContext';
import '../Styles/RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const { setSelectedRecipe } = useRecipe();

  const handleClick = () => {
    setSelectedRecipe(recipe); 
    navigate('/recipe'); 
  };

  return (
    <div className="recipe-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={recipe.imageUrl || 'https://via.placeholder.com/150'} alt={recipe.foodName} className="recipe-image" />
      <div className="recipe-details">
        <h4>{recipe.foodName}</h4>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;