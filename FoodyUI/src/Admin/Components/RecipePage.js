import React, { useEffect, useState } from 'react';
import {
  getAllRecipes,
  deleteRecipe,
  updateRecipe,
  createRecipe,
  getNutritionByRecipeId,
  searchByFoodName
} from '../../Service/RecipeService';
import '../Styles/RecipePage.css';
import SideBar from './SideBar';
const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    foodName: '',
    description: '',
    overview: '',
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
    carbohydrates: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const pageSize = 5;
  const [totalPages, setTotalPages] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, [page]);

  useEffect(() => {
    const checkEmpty = () => {
      if (searchQuery.trim() === '') {
        loadRecipes(); 
      }
    };

    checkEmpty(); 
  }, [searchQuery]);

  const handleSearchInput = async (query) => {
    setSearchQuery(query);
    if (query.length > 1) {
      try {
        const res = await searchByFoodName(query); 
        setSuggestions(res.data.map((r) => r.foodName));
      } catch (error) {
        console.error(error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchClick = async () => {
    if (searchQuery.trim() === '') return;
    try {
      const res = await searchByFoodName(searchQuery);
      setRecipes(res.data); 
      setSuggestions([]);
      setPage(0);
      setTotalPages(1); 
    } catch (error) {
      console.error(error);
    }
  };





  const loadRecipes = async () => {
    const res = await getAllRecipes(page, pageSize);
    setTotalPages(res.data.totalPages);
    const enriched = await Promise.all(
      res.data.content.map(async (recipe) => {
        const nutritionRes = await getNutritionByRecipeId(recipe.id);
        return { ...recipe, nutrition: nutritionRes.data };
      })
    );
    setRecipes(enriched);
  };

  const handleDelete = async (id) => {
    await deleteRecipe(id);
    loadRecipes();
  };

  const handleEdit = async (id, updatedData) => {
    const payload = {
      ...updatedData,
      prepTime: Number(updatedData.prepTime),
      cookTime: Number(updatedData.cookTime),
      totalTime: Number(updatedData.totalTime),
      instructions: { stepDescription: updatedData.instructions?.stepDescription || '' },
      nutrition: {
        calories: Number(updatedData.nutrition?.calories),
        sugar: Number(updatedData.nutrition?.sugar),
        protein: Number(updatedData.nutrition?.protein),
        fat: Number(updatedData.nutrition?.fat),
        fiber: Number(updatedData.nutrition?.fiber),
        carbohydrates: Number(updatedData.nutrition?.carbohydrates)
      }
    };

    await updateRecipe(id, payload);
    loadRecipes();
  };

  const handleAdd = async () => {
    try {
      const payload = {
        ...newRecipe,
        prepTime: Number(newRecipe.prepTime),
        cookTime: Number(newRecipe.cookTime),
        totalTime: Number(newRecipe.totalTime),
        totalViews: 1, 
        instructions: { stepDescription: newRecipe.instructions },
        nutrition: {
          calories: Number(newRecipe.calories),
          sugar: Number(newRecipe.sugar),
          protein: Number(newRecipe.protein),
          fat: Number(newRecipe.fat),
          fiber: Number(newRecipe.fiber),
          carbohydrates: Number(newRecipe.carbohydrates)
        }
      };

      await createRecipe(payload);
      setNewRecipe({
        foodName: '',
        description: '',
        overview: '',
        imageUrl: '',
        videoUrl: '',
        ingredients: '',
        cuisines: '',
        prepTime: '',
        cookTime: '',
        totalTime: '',
        difficulty: '',
        foodType: '',
        totalViews: '',
        instructions: '',
        calories: '',
        sugar: '',
        protein: '',
        fat: '',
        fiber: '',
        carbohydrates: ''
      });
      loadRecipes();
    } catch (error) {
      alert('Error adding recipe: ' + error.message);
    }
  };

  const handleInputChange = (e, idx, field, isNutrition = false, isInstruction = false) => {
    const updated = [...recipes];
    if (isNutrition) {
      updated[idx].nutrition = { ...updated[idx].nutrition, [field]: e.target.value };
    } else if (isInstruction) {
      updated[idx].instructions = { stepDescription: e.target.value };
    } else {
      updated[idx][field] = e.target.value;
    }
    setRecipes(updated);
  };

  

  return (

    <div className="recipe-content">
    <div className="table-container">
      <h2 className='title'>Recipe List </h2>
    
      <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        <input
          type="search"
          placeholder="Search by food name"
          value={searchQuery}
          onChange={(e) => handleSearchInput(e.target.value)}
          style={{ marginRight: '0.5rem', padding: '0.3rem' }}
        />
        <button onClick={handleSearchClick}>Search</button>

        {suggestions.length > 0 && (
          <ul className='suggestion-list'>
            {suggestions.map((s, i) => (
              <li
                key={i}
                onClick={() => {
                  setSearchQuery(s);
                  setSuggestions([]);
                }}
                style={{ padding: '10px', cursor: 'pointer' }}
              >
                {s}
              </li>
            ))}
          </ul>
        )}

      </div>

{/* 
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 0))} disabled={page === 0}>Prev</button>
        <span style={{ margin: '0 1rem' }}>Page {page + 1} of {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))} disabled={page + 1 >= totalPages}>Next</button>
      </div> */}

      <table className="recipe-table">
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Description</th>
            <th>Overview</th>
            <th>Image URL</th>
            <th>Video URL</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Prep Time <span style={{color:"grey", fontSize:"12px"}}>in mins</span></th>
            <th>Cook Time <span style={{color:"grey", fontSize:"12px"}}>in mins</span></th>
            <th>Total Time <span style={{color:"grey", fontSize:"12px"}}>in mins</span></th>
            <th>Difficulty</th>
            <th>Food Type</th>
            <th>Cuisines</th>
            <th>Calories <span style={{color:"grey", fontSize:"12px"}}>in kcal</span></th>
            <th>Sugar <span style={{color:"grey", fontSize:"12px"}}>in g</span></th>
            <th>Protein <span style={{color:"grey", fontSize:"12px"}}>in g</span></th>
            <th>Fat <span style={{color:"grey", fontSize:"12px"}}>in g</span></th>
            <th>Fiber <span style={{color:"grey", fontSize:"12px"}}>in g</span></th>
            <th>Carbohydrates <span style={{color:"grey", fontSize:"12px"}}>in g</span></th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          <tr className="new-row">
            <td><input value={newRecipe.foodName} placeholder="Enter food name" onChange={(e) => setNewRecipe({ ...newRecipe, foodName: e.target.value })} /></td>
            <td><textarea value={newRecipe.description} placeholder="Enter a short description" onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })} /></td>
            <td><input value={newRecipe.overview} placeholder="Enter an overview of the recipe" onChange={(e) => setNewRecipe({ ...newRecipe, overview: e.target.value })} /></td>
            <td><input value={newRecipe.imageUrl} placeholder="Enter image URL" onChange={(e) => setNewRecipe({ ...newRecipe, imageUrl: e.target.value })} /></td>
            <td><input value={newRecipe.videoUrl} placeholder="Enter YouTube video URL" onChange={(e) => setNewRecipe({ ...newRecipe, videoUrl: e.target.value })} /></td>
            <td><textarea value={newRecipe.ingredients} placeholder="Enter ingredients (e.g., sugar - 200g)" onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })} /><div><ul>{newRecipe.ingredients && newRecipe.ingredients.split('\n').map((item, i) => (<div key={i}><li>{item.trim()}</li></div>))}</ul></div></td>
            <td><textarea value={newRecipe.instructions} placeholder="Enter steps (e.g., Boil water)" onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })} /><div><ul>{newRecipe.instructions&& newRecipe.instructions.split('\n').map((item, i) => (<div key={i}><li>{item.trim()}</li></div>))}</ul></div></td>
            <td><input value={newRecipe.prepTime} placeholder="Enter preparation time (e.g., 15)" onChange={(e) => setNewRecipe({ ...newRecipe, prepTime: e.target.value })} /></td>
            <td><input value={newRecipe.cookTime} placeholder="Enter cooking time (e.g., 30)" onChange={(e) => setNewRecipe({ ...newRecipe, cookTime: e.target.value })} /></td>
            <td><input value={newRecipe.totalTime} placeholder="Enter total time (e.g., 45)" onChange={(e) => setNewRecipe({ ...newRecipe, totalTime: e.target.value })} /></td>
            <td><input value={newRecipe.difficulty} placeholder="Enter difficulty (e.g., Easy, Medium, Hard)" onChange={(e) => setNewRecipe({ ...newRecipe, difficulty: e.target.value })} /></td>
            <td><input value={newRecipe.foodType} placeholder="Enter food type (e.g., Lunch, Breakfast, Dinner)" onChange={(e) => setNewRecipe({ ...newRecipe, foodType: e.target.value })} /></td>
            <td><input value={newRecipe.cuisines} placeholder="Enter cuisine type (e.g., Indian, Italian)" onChange={(e) => setNewRecipe({ ...newRecipe, cuisines: e.target.value })} /></td>
            <td><input value={newRecipe.calories} placeholder="Enter calorie count (e.g., 200)" onChange={(e) => setNewRecipe({ ...newRecipe, calories: e.target.value })} /></td>
            <td><input value={newRecipe.sugar} placeholder="Enter sugar content (e.g., 10)" onChange={(e) => setNewRecipe({ ...newRecipe, sugar: e.target.value })} /></td>
            <td><input value={newRecipe.protein} placeholder="Enter protein content (e.g., 8)" onChange={(e) => setNewRecipe({ ...newRecipe, protein: e.target.value })} /></td>
            <td><input value={newRecipe.fat} placeholder="Enter fat content (e.g., 5)" onChange={(e) => setNewRecipe({ ...newRecipe, fat: e.target.value })} /></td>
            <td><input value={newRecipe.fiber} placeholder="Enter fiber content (e.g., 2)" onChange={(e) => setNewRecipe({ ...newRecipe, fiber: e.target.value })} /></td>
            <td><input value={newRecipe.carbohydrates} placeholder="Enter carbohydrates content (e.g., 25)" onChange={(e) => setNewRecipe({ ...newRecipe, carbohydrates: e.target.value })} /></td>
            <td><button onClick={handleAdd} className="add-btn">Add</button></td>
          </tr>

          {recipes.map((recipe, idx) => (
            <tr key={recipe.id}>
              <td><input value={recipe.foodName || ''} onChange={(e) => handleInputChange(e, idx, 'foodName')} /></td>
              <td><textarea value={recipe.description || ''} onChange={(e) => handleInputChange(e, idx, 'description')} /></td>
              <td><input value={recipe.overview || ''} onChange={(e) => handleInputChange(e, idx, 'overview')} /></td>
              <td><input value={recipe.imageUrl || ''} onChange={(e) => handleInputChange(e, idx, 'imageUrl')} /></td>
              <td><input value={recipe.videoUrl || ''} onChange={(e) => handleInputChange(e, idx, 'videoUrl')} /></td>
              <td><textarea value={recipe.ingredients|| ''} onChange={(e) => handleInputChange(e, idx, 'ingredients')} /></td>
              <td><textarea value={recipe.instructions?.stepDescription || ''} onChange={(e) => handleInputChange(e, idx, 'stepDescription', false, true)} /></td>
              <td><input value={recipe.prepTime || ''} onChange={(e) => handleInputChange(e, idx, 'prepTime')} /></td>
              <td><input value={recipe.cookTime || ''} onChange={(e) => handleInputChange(e, idx, 'cookTime')} /></td>
              <td><input value={recipe.totalTime || ''} onChange={(e) => handleInputChange(e, idx, 'totalTime')} /></td>
              <td><input value={recipe.difficulty || ''} onChange={(e) => handleInputChange(e, idx, 'difficulty')} /></td>
              <td><input value={recipe.foodType || ''} onChange={(e) => handleInputChange(e, idx, 'foodType')} /></td>
              <td><input value={recipe.cuisines || ''} onChange={(e) => handleInputChange(e, idx, 'cuisines')} /></td>
              <td><input value={recipe.nutrition?.calories || ''} onChange={(e) => handleInputChange(e, idx, 'calories', true)} /></td>
              <td><input value={recipe.nutrition?.sugar || ''} onChange={(e) => handleInputChange(e, idx, 'sugar', true)} /></td>
              <td><input value={recipe.nutrition?.protein || ''} onChange={(e) => handleInputChange(e, idx, 'protein', true)} /></td>
              <td><input value={recipe.nutrition?.fat || ''} onChange={(e) => handleInputChange(e, idx, 'fat', true)} /></td>
              <td><input value={recipe.nutrition?.fiber || ''} onChange={(e) => handleInputChange(e, idx, 'fiber', true)} /></td>
              <td><input value={recipe.nutrition?.carbohydrates || ''} onChange={(e) => handleInputChange(e, idx, 'carbohydrates', true)} /></td>
              <td>
                <button onClick={() => handleEdit(recipe.id, recipe)}>Save</button>
                <button onClick={() => handleDelete(recipe.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}

          
        </tbody>
      </table>

      <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 0))} disabled={page === 0}>Prev</button>
        <span style={{ margin: '0 1rem' }}>Page {page + 1} of {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))} disabled={page + 1 >= totalPages}>Next</button>
      </div>
    </div>
    </div>
  );
};

export default RecipePage;
