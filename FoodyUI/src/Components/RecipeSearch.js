import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import {
  searchByFoodName,
  searchByCuisines,
  searchByFoodType,
  searchByDifficulty,
  searchByTotalTime
} from '../Service/RecipeService';
import '../Styles/RecipeSearch.css';

const RecipeSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [foodName, setFoodName] = useState('');

  const cuisines = ['Indian', 'Italian', 'Mexican', 'Chinese'];
  const foodTypes = ['Breakfast', 'Lunch', 'Dinner'];
  const difficulties = ['Easy', 'Medium', 'Hard'];
  const timeOptions = [15, 30, 45, 60];

  const handleSearchByName = async () => {
    try {
      const res = await searchByFoodName(foodName);
      setSearchResults(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = async (type, value) => {
    try {
      let res;
      switch (type) {
        case 'cuisine':
          res = await searchByCuisines(value);
          break;
        case 'foodType':
          res = await searchByFoodType(value);
          break;
        case 'difficulty':
          res = await searchByDifficulty(value);
          break;
        case 'time':
          res = await searchByTotalTime(value);
          break;
        default:
          return;
      }
      setSearchResults(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-container">
      <h2 className="title">Search Recipes</h2>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="Search by food name"
        />
        <button onClick={handleSearchByName}>Search</button>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="filter-group">
          <h3>Cuisine</h3>
          <div className="filter-options">
            {cuisines.map((cuisine) => (
              <div
                key={cuisine}
                className="filter-box"
                onClick={() => handleFilter('cuisine', cuisine)}
              >
                {cuisine}
              </div>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h3>Food Type</h3>
          <div className="filter-options">
            {foodTypes.map((type) => (
              <div
                key={type}
                className="filter-box"
                onClick={() => handleFilter('foodType', type)}
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h3>Difficulty</h3>
          <div className="filter-options">
            {difficulties.map((level) => (
              <div
                key={level}
                className="filter-box"
                onClick={() => handleFilter('difficulty', level)}
              >
                {level}
              </div>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h3>Total Time</h3>
          <div className="filter-options">
            {timeOptions.map((time) => (
              <div
                key={time}
                className="filter-box"
                onClick={() => handleFilter('time', time)}
              >
                Under {time} min
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="results">
        <h3>Results:</h3>
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
    </div>
  );
};

export default RecipeSearch;
