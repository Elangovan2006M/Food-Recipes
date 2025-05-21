import React, { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi';
import RecipeCard from './RecipeCard';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { searchByFoodName, getAllRecipes } from '../Service/RecipeService';
import '../Styles/RecipeSearch.css';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const RecipeSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [foodName, setFoodName] = useState('');
  // const [suggestions, setSuggestions] = useState([]);
  const [filtersApplied, setFiltersApplied] = useState(false);
// Filter states
  const cuisines = ['Indian', 'French', 'Italian', 'Japanese', 'Chinese', 'Mexican', 'Thai', 'Malaysian', 'Australian', 'American', 'Korean'];
  const foodTypes = ['Breakfast', 'Lunch', 'Dinner'];
  const difficulties = ['Easy', 'Medium', 'Hard'];
  const timeOptions = [15, 30, 45, 60];
// Filter visibility states
  const [showCuisines, setShowCuisines] = useState(false);
  const [showFoodTypes, setShowFoodTypes] = useState(false);
  const [showDurations, setShowDurations] = useState(false);
  const [showDifficulties, setShowDifficulties] = useState(false);
// Selected filter states
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedFoodTypes, setSelectedFoodTypes] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
// Pagination states
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    handleInitialLoad(0);
  }, []);
// Initial load of recipes
  const handleInitialLoad = async (page) => {
    try {
      const res = await getAllRecipes(page, pageSize);
      setSearchResults(res.data.content);
      setTotalPages(res.data.totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.error(error);
    }
  };
// Search input handler
  const handleSearchInput = async (query) => {
    setFoodName(query);

    if (query.length > 1) {
      try {
        const res = await searchByFoodName(query);
        const resultData = res.data;

        setSearchResults(resultData);
        setFiltersApplied(false);
        setCurrentPage(0);
        setTotalPages(1);
      } catch (error) {
        console.error(error);
      }
    } else {
      handleInitialLoad(0);
    }
  };



  

// Search button handler
  const handleSearchClick = async () => {
    if (foodName.trim() === '') return;
    try {
      const res = await searchByFoodName(foodName);
      setSearchResults(res.data);
      // setSuggestions([]);
      setFiltersApplied(false);
      setCurrentPage(0);
      setTotalPages(1);
    } catch (error) {
      console.error(error);
    }
  };
// Checkbox change handler
  const handleCheckboxChange = (value, setter, selectedArray) => {
    setter(
      selectedArray.includes(value)
        ? selectedArray.filter((item) => item !== value)
        : [...selectedArray, value]
    );
  };
// Filter search handler
  const handleFilterSearch = async (page = 0) => {
    try {
      setFiltersApplied(true);
      setCurrentPage(page);

      const filteredData = await getAllRecipes(0, 200); // Fetch all recipes to filter
      let results = filteredData.data.content;

      if (selectedCuisines.length)
        results = results.filter((item) => selectedCuisines.includes(item.cuisines));

      if (selectedFoodTypes.length)
        results = results.filter((item) => selectedFoodTypes.includes(item.foodType));

      if (selectedDifficulties.length)
        results = results.filter((item) => selectedDifficulties.includes(item.difficulty));

      if (selectedTimes.length)
        results = results.filter((item) => item.totalTime <= Math.max(...selectedTimes));

      setTotalPages(Math.ceil(results.length / pageSize));
      setSearchResults(results.slice(page * pageSize, (page + 1) * pageSize));
    } catch (error) {
      console.error(error);
    }
  };
// Filter reset handler
  const handlePageChange = (newPage) => {
    if (newPage < 0 || newPage >= totalPages) return;
    if (filtersApplied) {
      handleFilterSearch(newPage);
    } else {
      handleInitialLoad(newPage);
    }
  };

  return (
    <div className="main-container">
     
      <section className="content">
        <div className="search-header">
          <div className='search-title'>
            <input
              type="search"
              value={foodName}
              onChange={(e) => handleSearchInput(e.target.value)}
              placeholder="Search your recipe"
              className="search-input"
            />
            {/* {suggestions.length > 0 && (
              <ul className="suggestions-dropdown">
                {suggestions.map((item, index) => (
                  <li key={index} onClick={() => { setFoodName(item); handleSearchClick(); }}>
                    {item}
                  </li>
                ))}
              </ul>
            )} */}
          </div>
          <button onClick={handleSearchClick} className="search-button">
            <FiSearch className="searchicon" />
          </button>
        </div>

        <div className="below-search">

          <div className="filters">
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
            {showCuisines && <hr className='filter-line' />}
            {/* FOOD TYPES */}
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
            {showFoodTypes && <hr className='filter-line' />}
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
            {showDifficulties && <hr className='filter-line' />}

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

            <button onClick={() => handleFilterSearch(0)} className="filter-button">Apply</button>
        </div>
        <div className="results-section">
          <div className="results">
            {searchResults.length > 0 ? (
              <div className="card-grid">
                {searchResults.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) : (<div className='no-results'>
              <MdOutlineScreenSearchDesktop style={{fontSize:"80px"}} />
              <h3 style={{color:"black"}}>No results found</h3>
            </div>
            )}
          </div>

          {searchResults.length > 0 ? (
              <div className="pagination-controls">
                <button className='prev-button' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}>
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <span className='page-numbers'>{`${currentPage + 1} of ${totalPages}`}</span>
                <button className='next-button' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages - 1}>
                  <MdOutlineKeyboardArrowRight />
                </button>
              </div>
            ):null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeSearch;
