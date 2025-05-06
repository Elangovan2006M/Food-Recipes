import React, { useState, useEffect } from 'react';
import '../Styles/Recipe.css';
import { getAllRecipes, searchByCuisines } from '../Service/RecipeService'; // make sure this function exists
import RecipeCard from './RecipeCard';
import { useRecipe } from '../Service/RecipeContext'; // Import context

const Recipe = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const { selectedCuisine } = useRecipe(); // Get cuisine from context

   // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 10;

    // Handle page change
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      fetchAllRecipes();
    };

  useEffect(() => {
    if (selectedCuisine) {
      fetchRecipesByCuisine(selectedCuisine);
    } else {
      fetchAllRecipes();
    }
  }, [selectedCuisine]);

  const fetchAllRecipes = async () => {
      try {
        const res = await getAllRecipes(currentPage, pageSize);
        setFilteredRecipes(res.data.content); 
        setTotalPages(res.data.totalPages); 
      } catch (error) {
        console.error(error);
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
      {/* Pagination Controls */}
      <div className="pagination-controls">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <span>{`Page ${currentPage + 1} of ${totalPages}`}</span>
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </div>
    </div>
  );
};

export default Recipe;
