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

      {/*Video Section */}
      <div className="media-ingredients-wrapper">
        <div className="video-box">
          <iframe
            src={selectedRecipe.videoUrl}
            title="Recipe Video"
            allowFullScreen
            className="recipe-video"
          ></iframe>
        </div>

        {/* Ingredients Section */}
        <div className="ingredients-box">
          <h3>Ingredients</h3>
          <ul>
            {selectedRecipe.ingredients.split('$').map((item, index) => (
              <span className='ingredient'><li key={index}>{item.trim()}</li></span>
            ))}
          </ul>
        </div>
      </div>

      {/* Metadata and Overview */}
      <div className="metadata-overview-wrapper">
        <div>
          <div className="metadata-row">
            <div className="meta-box"><span>Cook time</span><p>{selectedRecipe.cookTime} Min</p></div>
            <div className="meta-box"><span>Prep time</span><p>{selectedRecipe.prepTime} Min</p></div>
            <div className="meta-box"><span>Cuisine</span><p>{selectedRecipe.cuisines}</p></div>
            <div className="meta-box"><span>Difficulty</span><p>{selectedRecipe.difficulty}</p></div>
          </div>

          <div className="overview-box">
            <h3>Over<span>View</span></h3>
            <p>{selectedRecipe.overview || selectedRecipe.description}</p>
          </div>
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

      {/* Instructions */}
      <div className="instructions-section">

        <div className="full-align">
            <h2><span className="home-highlight-style">Started</span> Cooking?</h2>
        </div>
        <div className="button-stack">
          <div className="button-back"></div>
          <h3 className="button-front"> Follow The Instructions</h3>
        </div>

        {selectedRecipe.instructions.stepDescription.split('$').map((step, index) => (
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
