import React, { useState, useEffect } from 'react';
import '../Styles/Recipe.css';
import { getAllRecipes, searchByCuisines } from '../Service/RecipeService'; // make sure this function exists
import RecipeCard from './RecipeCard';
import { useRecipe } from '../Service/RecipeContext'; // Import context

const Recipe = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const { selectedCuisine } = useRecipe(); // Get cuisine from context

  useEffect(() => {
    if (selectedCuisine) {
      fetchRecipesByCuisine(selectedCuisine);
    } else {
      fetchAllRecipes();
    }
  }, [selectedCuisine]);

  const fetchAllRecipes = async () => {
    try {
      const response = await getAllRecipes();
      setFilteredRecipes(response.data);
    } catch (error) {
      console.log("Error displaying all recipes:", error);
    }
  };

  const fetchRecipesByCuisine = async (cuisine) => {
    try {
      const response = await searchByCuisines(cuisine); 
      setFilteredRecipes(response.data);
    } catch (error) {
      console.log("Error fetching cuisine recipes:", error);
    }
  };

  return (
    <div className='recipe-container'>
      <h2 className='recipe-heading'>
        {selectedCuisine ? `${selectedCuisine} Recipes` : "All Recipes"}
      </h2>
      <div className='card-content'>
        <div className='result'>
          {filteredRecipes.length > 0 ? (
            <div className='card-grid'>
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
