import React, { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi';
import RecipeCard from './RecipeCard';
import {
  searchByFoodName,
  getAllRecipes,
} from '../Service/RecipeService';
import '../Styles/RecipeSearch.css';

const RecipeSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const cuisines = ['Indian', 'French', 'Italian', 'Japanese','Chinese','Mexican','Thai','Malaysian','Australian','American','Korean'];
  const foodTypes = ['Breakfast', 'Lunch', 'Dinner'];
  const difficulties = ['Easy', 'Medium', 'Hard'];
  const timeOptions = [15, 30, 45, 60];

  // Dropdown toggles
  const [showCuisines, setShowCuisines] = useState(false);
  const [showFoodTypes, setShowFoodTypes] = useState(false);
  const [showDurations, setShowDurations] = useState(false);
  const [showDifficulties, setShowDifficulties] = useState(false);

  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedFoodTypes, setSelectedFoodTypes] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  // Initial load to fetch all recipes
  useEffect(() => { 
    handleInitialLoad();
  }, []);

  // Fetch recipes with pagination
  const handleInitialLoad = async () => {
    try {
      const res = await getAllRecipes(currentPage, pageSize);
      setSearchResults(res.data.content); 
      setTotalPages(res.data.totalPages); 
    } catch (error) {
      console.error(error);
    }
  };

  // Handle search input and fetch suggestions
  const handleSearchInput = async (query) => {
    try {
      setFoodName(query);

      if (query.length > 1) {
        const res = await searchByFoodName(query);
        const foodNames = res.data.map((recipe) => recipe.foodName);
        setSuggestions(foodNames);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Handle checkbox changes for filters
  const handleCheckboxChange = (value, setter, selectedArray) => {
    if (selectedArray.includes(value)) {
      setter(selectedArray.filter((item) => item !== value));
    } else {
      setter([...selectedArray, value]);
    }
  };

  // Handle filter search
  const handleFilterSearch = async () => {
    try {
      let results = [];

      // Fetch filtered data based on current page
      const filteredData = await getAllRecipes(currentPage, pageSize); // Include pagination in API call

      results = filteredData.data.content; // Assuming 'content' holds the filtered list of recipes

      // Apply filters on the fetched list
      if (selectedCuisines.length > 0) {
        results = results.filter(item =>
          selectedCuisines.includes(item.cuisines)
        );
      }

      if (selectedFoodTypes.length > 0) {
        results = results.filter(item =>
          selectedFoodTypes.includes(item.foodType)
        );
      }

      if (selectedDifficulties.length > 0) {
        results = results.filter(item =>
          selectedDifficulties.includes(item.difficulty)
        );
      }

      if (selectedTimes.length > 0) {
        results = results.filter(item =>
          item.totalTime <= Math.max(...selectedTimes)
        );
      }

      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle search button click
  const handleSearchClick = async () => {
    try {
      if (foodName.trim() !== '') {
        const res = await searchByFoodName(foodName);
        setSearchResults(res.data);
        setSuggestions([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleInitialLoad();
  };

  return (
    <div className="main-container">
      {/* Sidebar Filters */}
      <aside className="filters">
        <h3 className="filter-word">Filters</h3>

        {/* CUISINES */}
        <div className="filter-group">
          <h4 onClick={() => setShowCuisines(!showCuisines)} style={{ cursor: 'pointer' }}>
            Cuisines {showCuisines ? <FiChevronUp /> : <FiChevronDown />}
          </h4>
          {showCuisines && cuisines.map((item) => (
            <label key={item} className="filter-option">
              <input
                type="checkbox"
                checked={selectedCuisines.includes(item)}
                onChange={() => handleCheckboxChange(item, setSelectedCuisines, selectedCuisines)}
              />
              {item}
            </label>
          ))}
        </div>
        {showCuisines ? <hr className='filter-line' /> : null}

        {/* FOOD TYPE */}
        <div className="filter-group">
          <h4 onClick={() => setShowFoodTypes(!showFoodTypes)} style={{ cursor: 'pointer' }}>
            Food Type {showFoodTypes ? <FiChevronUp /> : <FiChevronDown />}
          </h4>
          {showFoodTypes && foodTypes.map((item) => (
            <label key={item} className="filter-option">
              <input
                type="checkbox"
                checked={selectedFoodTypes.includes(item)}
                onChange={() => handleCheckboxChange(item, setSelectedFoodTypes, selectedFoodTypes)}
              />
              {item}
            </label>
          ))}
        </div>
        {showFoodTypes ? <hr className='filter-line' /> : null}

        {/* DIFFICULTY */}
        <div className="filter-group">
          <h4 onClick={() => setShowDifficulties(!showDifficulties)} style={{ cursor: 'pointer' }}>
            Difficulty {showDifficulties ? <FiChevronUp /> : <FiChevronDown />}
          </h4>
          {showDifficulties && difficulties.map((item) => (
            <label key={item} className="filter-option">
              <input
                type="checkbox"
                checked={selectedDifficulties.includes(item)}
                onChange={() => handleCheckboxChange(item, setSelectedDifficulties, selectedDifficulties)}
              />
              {item}
            </label>
          ))}
        </div>
        {showDifficulties ? <hr className='filter-line' /> : null}

        {/* DURATION */}
        <div className="filter-group">
          <h4 onClick={() => setShowDurations(!showDurations)} style={{ cursor: 'pointer' }}>
            Duration {showDurations ? <FiChevronUp /> : <FiChevronDown />}
          </h4>
          {showDurations && timeOptions.map((item) => (
            <label key={item} className="filter-option">
              <input
                type="checkbox"
                checked={selectedTimes.includes(item)}
                onChange={() => handleCheckboxChange(item, setSelectedTimes, selectedTimes)}
              />
              Under {item} min
            </label>
          ))}
        </div>
        {showDurations ? <hr className='filter-line' /> : null}

        
        <button onClick={handleFilterSearch} className="filter-button">
          Apply
        </button>
      </aside>

      {/* Main Content */}
      <section className="content">
        <div className="search-header">
          <div style={{ position: 'relative', width: '45%' }}>
            <input
              type="search"
              value={foodName}
              onChange={(e) => handleSearchInput(e.target.value)}
              placeholder="Search your recipe"
              className="search-input"
            />
            
            {suggestions.length > 0 && (
              <ul className="suggestions-dropdown">
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setFoodName(item);
                      handleSearchClick();
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button onClick={handleSearchClick} className="search-button">
            <FiSearch className="searchicon" />
          </button>
        </div>

        <div className="results">
          {searchResults.length > 0 ? (
            <div className="card-grid">
              {searchResults.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <p>No results to display.</p>
          )}
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
      </section>
    </div>
  );
};

export default RecipeSearch;
