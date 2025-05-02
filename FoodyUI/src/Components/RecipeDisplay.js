import React from 'react';
import { useRecipe } from '../Service/RecipeContext';
import '../Styles/RecipeDisplay.css';

const RecipeDisplay = () => {
  const { selectedRecipe } = useRecipe();

  if (!selectedRecipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="recipe-display-container">
      <h2 className="recipe-title">{selectedRecipe.foodName}</h2>

      {/* Image and Video Section */}
      <div className="media-section">
        <div className="video-box">
          <iframe
            src={selectedRecipe.videoUrl}
            title="Recipe Video"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="ingredients-box">
          <h3>Ingredients</h3>
          <ul>
            {selectedRecipe.ingredients.split(',').map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
        </div>


      </div>


      {/* Metadata Row */}
      <div className="metadata-row">
        <div className="meta-box">
          <span>Cook time</span>
          <p>{selectedRecipe.cookTime} Min</p>
        </div>
        <div className="meta-box">
          <span>Prep time</span>
          <p>{selectedRecipe.prepTime} Min</p>
        </div>
        <div className="meta-box">
          <span>cuisine</span>
          <p>{selectedRecipe.cuisines}</p>
        </div>
        <div className="meta-box">
          <span>Difficulty</span>
          <p>{selectedRecipe.difficulty}</p>
        </div>
        <div className="nutrition-box">
          <h3>Nutrition <span>Facts</span> <small>(Per Serving)</small></h3>
          <p><strong>Calories:</strong> {selectedRecipe.nutrition.calories} kcal</p>
          <p><strong>Sugar:</strong> {selectedRecipe.nutrition.sugar} g</p>
          <p><strong>Protein:</strong> {selectedRecipe.nutrition.protein} g</p>
          <p><strong>Fat:</strong> {selectedRecipe.nutrition.fat} g</p>
          <p><strong>Fiber:</strong> {selectedRecipe.nutrition.fiber} g</p>
          <p><strong>Carbohydrates:</strong> {selectedRecipe.nutrition.carbohydrates} g</p>
        </div>
      </div>
      {/* Ingredients and Nutrition Section */}
      <div className="side-panel">

      </div>

      {/* Overview */}
      <div className="overview-box">
        <h3>Over<span>View</span></h3>
        <p>{selectedRecipe.overview || selectedRecipe.description}</p>
      </div>

      {/* Instructions */}
      <div className="instructions-section">
        <h3><span>Started</span> Cooking?</h3>
        <button className="follow-button">Follow The Instructions</button>

        {selectedRecipe.instructions.stepDescription
          .split(',')
          .map((step, index) => (
            <div key={index} className="instruction-step">
              <h4>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h4>
              <p>{step.trim()}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeDisplay;
