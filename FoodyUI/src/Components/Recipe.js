import React, { useState, useEffect } from 'react';
import '../Styles/Recipe.css';
import { getAllRecipes, searchByCuisines,searchByDifficulty, searchByFoodType,searchByTotalTime } from '../Service/RecipeService'; 
import RecipeCard from './RecipeCard';
import { useRecipe } from '../Service/RecipeContext';
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";

const Recipe = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const { selectedCuisine, selectedFoodType, selectedDifficulty, selectedTime } = useRecipe(); // Accessing filter states from context
  const { setSelectedCuisine, setSelectedFoodType, setSelectedDifficulty, setSelectedTime } = useRecipe(); // Accessing filter setters from context


   // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 8; // Number of recipes per page

    // Pagination handler
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      fetchFilteredRecipes(newPage);
    };
    

    // Combined filter check logic (useEffect and pagination)
    const fetchFilteredRecipes = (page) => {
      if (selectedCuisine) {
        fetchRecipesByCuisine(selectedCuisine, page);
      } else if (selectedFoodType) {
        fetchRecipesByFoodType(selectedFoodType, page);
      } else if (selectedDifficulty) {
        fetchRecipesByDifficulty(selectedDifficulty, page);
      } else if (selectedTime) {
        fetchRecipesByTime(selectedTime, page);
      } else {
        fetchAllRecipes(page);
      }
    };

    // Filter effect
    useEffect(() => {
      setCurrentPage(0);
      fetchFilteredRecipes(0);
    }, [selectedCuisine, selectedFoodType, selectedDifficulty, selectedTime]);

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
  

    const fetchRecipesByCuisine = async (cuisine, page) => {
      try {
        const response = await searchByCuisines(cuisine, page, pageSize); 
        setFilteredRecipes(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log("Error fetching cuisine recipes:", error);
      }
    };
    
    const fetchRecipesByFoodType = async (foodType, page) => {
      try {
        const response = await searchByFoodType(foodType, page, pageSize); 
        setFilteredRecipes(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log("Error fetching food type recipes:", error);
      }
    };
    
    const fetchRecipesByDifficulty = async (difficulty, page) => {
      try {
        const response = await searchByDifficulty(difficulty, page, pageSize); 
        setFilteredRecipes(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log("Error fetching difficulty recipes:", error);
      }
    };
    
    const fetchRecipesByTime = async (time, page) => {
      try {
        const response = await searchByTotalTime(time, page, pageSize); 
        setFilteredRecipes(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log("Error fetching time recipes:", error);
      }
    };
    

  return (
    <div className='recipe-page-container'>
      <h2 className='recipe-heading'>
        {selectedCuisine
          ? `${selectedCuisine} Recipes`
          : selectedFoodType
          ? `${selectedFoodType} Recipes`
          : selectedDifficulty
          ? `${selectedDifficulty} Recipes`
          : selectedTime
          ? `${selectedTime} Minute Recipes`
          : "All Recipes"}
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
