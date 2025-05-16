import React, { useEffect, useState } from 'react';
import {
  getAllRecipes,
  deleteRecipe,
  updateRecipe,
  createRecipe,
  getNutritionByRecipeId
} from '../../Service/RecipeService';
import '../Styles/RecipePage.css';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
    const [newRecipe, setNewRecipe] = useState({
    name: '',
    foodName: '',
    description: '',
    imageUrl: '',
    videoUrl: '',
    ingredients: '',
    cuisines: '',
    prepTime: '',
    cookTime: '',
    totalTime: '',
    difficulty: '',
    foodType: '',
    instructions: '',
    calories: '',
    sugar: '',
    protein: '',
    fat: '',
    fiber: '',
    carbohydrates: '',
    });

const [page, setPage] = useState(0);
const pageSize = 10;
const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    loadRecipes();
  }, []);

  const handleDelete = async (id) => {
    await deleteRecipe(id);
    loadRecipes();
  };

  const handleEdit = async (id, updatedData) => {
    await updateRecipe(id, updatedData);
    loadRecipes();
  };

  const handleAdd = async () => {
  try {
    const payload = {
      ...newRecipe,
      prepTime: Number(newRecipe.prepTime),
      cookTime: Number(newRecipe.cookTime),
      totalTime: Number(newRecipe.totalTime),
      calories: Number(newRecipe.calories),
      sugar: Number(newRecipe.sugar),
      protein: Number(newRecipe.protein),
      fat: Number(newRecipe.fat),
      fiber: Number(newRecipe.fiber),
      carbohydrates: Number(newRecipe.carbohydrates),
    };

    
    if (typeof payload.instructions === 'string') {
      payload.instructions = { stepDescription: payload.instructions };
    }

    await createRecipe(payload);
    setNewRecipe({
      name: '',
      foodName: '',
      description: '',
      imageUrl: '',
      videoUrl: '',
      ingredients: '',
      cuisines: '',
      prepTime: '',
      cookTime: '',
      totalTime: '',
      difficulty: '',
      foodType: '',
      instructions: '',
      calories: '',
      sugar: '',
      protein: '',
      fat: '',
      fiber: '',
      carbohydrates: '',
    });
    loadRecipes();
  } catch (error) {
    alert('Error adding recipe: ' + error.message);
  }
};


  const handleInputChange = (e, idx, field, isNutrition = false) => {
    const updated = [...recipes];
    if (isNutrition) {
      updated[idx].nutrition = { ...updated[idx].nutrition, [field]: e.target.value };
    } else {
      updated[idx][field] = e.target.value;
    }
    setRecipes(updated);
  };

  const loadRecipes = async () => {
    const res = await getAllRecipes(page, pageSize);
    setTotalPages(res.data.totalPages); // assuming backend returns totalPages
    const enriched = await Promise.all(
        res.data.content.map(async (recipe) => {
        const nutritionRes = await getNutritionByRecipeId(recipe.id);
        return { ...recipe, nutrition: nutritionRes.data };
        })
    );
    setRecipes(enriched);
    };


  return (
    <div className="table-container">
      <h2>Recipe List</h2>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 0))} disabled={page === 0}>Prev</button>
        <span style={{ margin: '0 1rem' }}>Page {page + 1} of {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))} disabled={page + 1 >= totalPages}>Next</button>
    </div>

      <table className="recipe-table">
        <thead>
        <tr>
            <th>Food Name</th>
            <th>Description</th>
            <th>Image URL</th>
            <th>Video URL</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Prep Time</th>
            <th>Cook Time</th>
            <th>Total Time</th>
            <th>Difficulty</th>
            <th>Food Type</th>
            <th>Cuisines</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Actions</th>
        </tr>
        </thead>

        <tbody>
          {recipes.map((recipe, idx) => (
            <tr key={recipe.id}>
            <td><input value={recipe.foodName || ''} onChange={(e) => handleInputChange(e, idx, 'foodName')} /></td>
            <td><textarea value={recipe.description || ''} onChange={(e) => handleInputChange(e, idx, 'description')} /></td>
            <td><input value={recipe.imageUrl || ''} onChange={(e) => handleInputChange(e, idx, 'imageUrl')} /></td>
            <td><input value={recipe.videoUrl || ''} onChange={(e) => handleInputChange(e, idx, 'videoUrl')} /></td>
            <td>
                <textarea value={recipe.ingredients} onChange={(e) => handleInputChange(e, idx, 'ingredients')} />
                <div className="multiline-preview">
                {recipe.ingredients.split('$').map((item, i) => <div key={i}>• {item.trim()}</div>)}
                </div>
            </td>
            <td>
                <textarea
                value={recipe.instructions?.stepDescription || ''}
                onChange={(e) =>
                    handleInputChange({ target: { value: e.target.value } }, idx, 'instructions.stepDescription')
                }
                />
                <div className="multiline-preview">
                {(recipe.instructions?.stepDescription || '').split('$').map((item, i) => (
                    <div key={i}>→ {item.trim()}</div>
                ))}
                </div>
            </td>
            <td><input value={recipe.prepTime || ''} onChange={(e) => handleInputChange(e, idx, 'prepTime')} /></td>
            <td><input value={recipe.cookTime || ''} onChange={(e) => handleInputChange(e, idx, 'cookTime')} /></td>
            <td><input value={recipe.totalTime} onChange={(e) => handleInputChange(e, idx, 'totalTime')} /></td>
            <td><input value={recipe.difficulty} onChange={(e) => handleInputChange(e, idx, 'difficulty')} /></td>
            <td><input value={recipe.foodType} onChange={(e) => handleInputChange(e, idx, 'foodType')} /></td>
            <td><input value={recipe.cuisines} onChange={(e) => handleInputChange(e, idx, 'cuisines')} /></td>
            <td><input value={recipe.nutrition?.calories || ''} onChange={(e) => handleInputChange(e, idx, 'calories', true)} /></td>
            <td><input value={recipe.nutrition?.protein || ''} onChange={(e) => handleInputChange(e, idx, 'protein', true)} /></td>
            <td>
                <button onClick={() => handleEdit(recipe.id, recipe)}>Save</button>
                <button onClick={() => handleDelete(recipe.id)} className="delete-btn">Delete</button>
            </td>
            </tr>

          ))}
          <tr className="new-row">
        <td><input value={newRecipe.name} onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })} /></td>
        <td><input value={newRecipe.foodName} onChange={(e) => setNewRecipe({ ...newRecipe, foodName: e.target.value })} /></td>
        <td><textarea value={newRecipe.description} onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })} /></td>
        <td><input value={newRecipe.imageUrl} onChange={(e) => setNewRecipe({ ...newRecipe, imageUrl: e.target.value })} /></td>
        <td><input value={newRecipe.videoUrl} onChange={(e) => setNewRecipe({ ...newRecipe, videoUrl: e.target.value })} /></td>
        <td><textarea value={newRecipe.ingredients} onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })} /></td>
        <td><textarea value={newRecipe.instructions} onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })} /></td>
        <td><input value={newRecipe.prepTime} onChange={(e) => setNewRecipe({ ...newRecipe, prepTime: e.target.value })} /></td>
        <td><input value={newRecipe.cookTime} onChange={(e) => setNewRecipe({ ...newRecipe, cookTime: e.target.value })} /></td>
        <td><input value={newRecipe.totalTime} onChange={(e) => setNewRecipe({ ...newRecipe, totalTime: e.target.value })} /></td>
        <td><input value={newRecipe.difficulty} onChange={(e) => setNewRecipe({ ...newRecipe, difficulty: e.target.value })} /></td>
        <td><input value={newRecipe.foodType} onChange={(e) => setNewRecipe({ ...newRecipe, foodType: e.target.value })} /></td>
        <td><input value={newRecipe.cuisines} onChange={(e) => setNewRecipe({ ...newRecipe, cuisines: e.target.value })} /></td>
        <td colSpan="2">Nutrition added separately</td>
        <td><button onClick={handleAdd} className="add-btn">Add</button></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};

export default RecipePage;
