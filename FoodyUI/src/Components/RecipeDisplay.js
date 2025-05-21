import React from 'react';
import { useRecipe } from '../Service/RecipeContext';
import '../Styles/RecipeDisplay.css';
import { GiCampCookingPot, GiKnifeFork } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { MdSignalCellularAlt } from "react-icons/md";

const RecipeDisplay = () => {
  const { selectedRecipe } = useRecipe();

  if (!selectedRecipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="recipe-display-container">
      <h2 className="recipe-title">{selectedRecipe.foodName}</h2>

     {/* Video & Ingredients Section */}
      <div className="media-ingredients-wrapper">
        <div className="video-box">
          <iframe
            src={selectedRecipe.videoUrl}
            title="Recipe Video"
            allowFullScreen
            className="recipe-video"
          ></iframe>
        </div>

        <div className="ingredients-box">
          <h3>Ingredients</h3>
          <ul>
            {selectedRecipe.ingredients.split('\n').map((item, index) => (
              <li key={index}><span className="ingredient">{item.trim()}</span></li>
            ))}
          </ul>
        </div>
      </div>


      {/* Metadata and Overview */}
      <div className="metadata-overview-wrapper">

        <div className="overview-row">
          <div className="overview-box">
            <div className="metadata-row">
              <div className="meta-box">
                <div><span><GiCampCookingPot style={{color:"#e86b00",fontSize:"20px"}}/> Cook time</span><p>{selectedRecipe.cookTime} Min</p></div>
                <div><span> <GiKnifeFork style={{color:"#e86b00",fontSize:"20px"}}/> Prep time </span><p>{selectedRecipe.prepTime} Min</p></div>
                <div><span><BiWorld style={{color:"#e86b00",fontSize:"20px"}}/> Cuisine </span><p>{selectedRecipe.cuisines}</p></div>
                <div><span><MdSignalCellularAlt style={{color:"#e86b00",fontSize:"20px"}}/> Difficulty</span><p>{selectedRecipe.difficulty}</p></div>
              </div>
            </div>
            <div className="overview-text">
              <h3>Over<span>View</span></h3>
              <p>{selectedRecipe.overview || selectedRecipe.description}</p>
            </div>
          </div>
          <div className="nutrition-box">
            <h3>Nutrition <span>Facts</span> <small>(Per Serving)</small></h3>
            <div className='nutrition-facts'>
            <p><strong>Calories:</strong> {selectedRecipe.nutrition.calories} kcal</p>
            <p><strong>Sugar:</strong> {selectedRecipe.nutrition.sugar} g</p>
            <p><strong>Protein:</strong> {selectedRecipe.nutrition.protein} g</p>
            <p><strong>Fat:</strong> {selectedRecipe.nutrition.fat} g</p>
            <p><strong>Fiber:</strong> {selectedRecipe.nutrition.fiber} g</p>
            <p><strong>Carbohydrates:</strong> {selectedRecipe.nutrition.carbohydrates} g</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}

        <div className="full-align">
            <h2>Started<span className="home-highlight-style">Cooking</span>?</h2>
        </div>
        <div className="button-stack">
          <div className="button-back"></div>
          <button className="button-front"> Follow The Instructions</button>
        </div>

        {selectedRecipe.instructions.stepDescription.split('\n').map((step, index) => (
          <div key={index} className="instruction-step">
            <h4>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h4>
            <p>{step.trim()}</p>
          </div>
        ))}
      </div>

      
  );
};

export default RecipeDisplay;
