import React, {useState, useEffect} from 'react';
import '../Styles/Recipe.css';
import { getAllRecipes } from '../Service/RecipeService';
import RecipeCard from './RecipeCard';

const Recipe = () => {
    const [allrecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        displayAllRecipes();
    },[]);

    const displayAllRecipes = async () =>
    {
        try {
            const response = await getAllRecipes();
            const recipe = response.data;
            setAllRecipes(recipe);
        }
        catch(error)
        {
            console.log("Error displaying all recipes");
        }
    }
    
  return (
    <div className='recipe-container'>
        <div className='card-content'>
            <div className='result'>
                {allrecipes.length > 0 ? (
                    <div className='card-grid'>
                        {allrecipes.map((recipe) => (<RecipeCard key={recipe.id} recipe={recipe}/>))}
                    </div>
                ) : (<p>Loading...</p>)}
            </div>
        </div>
    </div>
  )
}

export default Recipe