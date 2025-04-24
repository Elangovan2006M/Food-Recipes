package com.example.foody.service;

import com.example.foody.model.Recipe;
import com.example.foody.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe getRecipeById(Long id) {
        return recipeRepository.findById(id).orElse(null);
    }

    public Recipe saveRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    // Search Methods
    public List<Recipe> searchByFoodName(String foodName) {
        return recipeRepository.findByFoodNameContainingIgnoreCase(foodName);
    }

    public List<Recipe> searchByCuisines(String cuisines) {
        return recipeRepository.findByCuisinesContainingIgnoreCase(cuisines);
    }

    public List<Recipe> searchByTotalTime(double totalTime) {
        return recipeRepository.findByTotalTimeLessThanEqual(totalTime);
    }

    public List<Recipe> searchByFoodType(String foodType) {
        return recipeRepository.findByFoodTypeIgnoreCase(foodType);
    }

    public List<Recipe> searchByDifficulty(String difficulty) {
        return recipeRepository.findByDifficultyIgnoreCase(difficulty);
    }
}
