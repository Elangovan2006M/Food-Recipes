import React, { useState, useEffect } from 'react';
import '../Styles/Recipe.css';
import { getAllRecipes, searchByCuisines } from '../Service/RecipeService'; 
import RecipeCard from './RecipeCard';
import { useRecipe } from '../Service/RecipeContext';
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";

const Recipe = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const { selectedCuisine } = useRecipe(); // Get cuisine from context

   // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 8; // Number of recipes per page

    // Handle page change
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      fetchAllRecipes(newPage);
    };

  useEffect(() => {
    if (selectedCuisine) {
      fetchRecipesByCuisine(selectedCuisine);
    } else {
      fetchAllRecipes();
    }
  }, [selectedCuisine]);

  // Fetch recipes with pagination
    const fetchAllRecipes = async (page = currentPage) => {
      try {
        const res = await getAllRecipes(page, pageSize);
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
    <div className='recipe-page-container'>
      <h2 className='recipe-heading'>
        {selectedCuisine ? `${selectedCuisine} Recipes` : "All Recipes"}
      </h2>
      <div className='recipe-card-content'>
        <div className='recipe-result'>
          {filteredRecipes.length > 0 ? (
            <div className='recipe-card-grid'>
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
          <button className='prev-button'
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 0}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <span className='page-numbers'>{`${currentPage + 1} of ${totalPages}`}</span>
          <button  className='next-button'
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages - 1}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
    </div>
  );
};

export default Recipe;
