import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import {
  searchByFoodName,
  searchByCuisines,
  searchByFoodType,
  searchByDifficulty,
  searchByTotalTime,
  getAllRecipes,
} from '../Service/RecipeService';
import '../Styles/RecipeSearch.css';
import { FiSearch } from 'react-icons/fi';

const RecipeSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const cuisines = ['Indian', 'Asian', 'Italian', 'Chinese', 'Korean'];
  const foodTypes = ['Breakfast', 'Lunch', 'Dinner'];
  const difficulties = ['Easy', 'Medium', 'Hard'];
  const timeOptions = [15, 30, 45, 60];

  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedFoodTypes, setSelectedFoodTypes] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  // Initial load to fetch all recipes
  useEffect(() => { 
    handleInitialLoad();
  }, []);

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


  // Initial load to fetch all recipes
  const handleInitialLoad = async () => {
    const  res = await getAllRecipes();
    setSearchResults(res.data);
  }

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

      if (selectedCuisines.length > 0) {
        const res = await searchByCuisines(selectedCuisines.join(','));
        results = res.data;
      }

      if (selectedFoodTypes.length > 0) {
        const res = await searchByFoodType(selectedFoodTypes.join(','));
        results = res.data;
      }

      if (selectedDifficulties.length > 0) {
        const res = await searchByDifficulty(selectedDifficulties.join(','));
        results = res.data;
      }

      if (selectedTimes.length > 0) {
        const res = await searchByTotalTime(Math.max(...selectedTimes));
        results = res.data;
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

  return (
    <div className="main-container">
      {/* Sidebar Filters */}
      <aside className="filters">
        <h3 className="filter-word">Filters</h3>

        <div className="filter-group">
          <h4>Cuisines</h4>
          {cuisines.map((item) => (
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

        <div className="filter-group">
          <h4>Food Type</h4>
          {foodTypes.map((item) => (
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

        <div className="filter-group">
          <h4>Duration</h4>
          {timeOptions.map((item) => (
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

        <div className="filter-group">
          <h4>Difficulty</h4>
          {difficulties.map((item) => (
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

        <button onClick={handleFilterSearch} className="filter-button">
          Apply
        </button>
      </aside>

      {/* Main Content */}
      <section className="content">
      <div className="search-header">
          <div style={{ position: 'relative', width: '45%' }}>
            <input
              type="text"
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
      </section>
    </div>
  );
};

export default RecipeSearch;
