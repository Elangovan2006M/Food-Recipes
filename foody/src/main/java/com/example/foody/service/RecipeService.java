package com.example.foody.service;

import com.example.foody.model.Nutrition;
import com.example.foody.model.Recipe;
import com.example.foody.model.ViewRecipe;
import com.example.foody.repository.RecipeRepository;
import com.example.foody.repository.ViewRecipeRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

import com.example.foody.model.Instruction;
import com.example.foody.repository.InstructionRepository;
import com.example.foody.repository.NutritionRepository;

@Service
public class RecipeService {

    private final ViewRecipeRepository viewRecipeRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private InstructionRepository instructionRepository;

    @Autowired
    private NutritionRepository nutritionRepository;


    RecipeService(ViewRecipeRepository viewRecipeRepository) {
        this.viewRecipeRepository = viewRecipeRepository;
    }

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

    //View Recipe - Trending and popular

    @Transactional
    public void trackView(Long recipeId, String ipAddress) {
    Recipe recipe = recipeRepository.findById(recipeId)
        .orElseThrow(() -> new RuntimeException("Recipe not found"));

    recipe.setTotalViews(recipe.getTotalViews() + 1);
    recipeRepository.save(recipe);

    ViewRecipe view = new ViewRecipe();
    view.setRecipe(recipe);
    view.setIpAddress(ipAddress);
    viewRecipeRepository.save(view);
    }

    public List<Recipe> getPopularRecipes() {
        return recipeRepository.findTopViewedRecipes();
    }
    
    public Recipe incrementViews(Long id) {
        Recipe recipe = recipeRepository.findById(id)
            .orElseThrow(() -> new NoSuchElementException("Recipe not found with ID: " + id));
        
        recipe.setTotalViews(recipe.getTotalViews() + 1);
        return recipeRepository.save(recipe);
    }
    

    //Trending Recipe
    public List<Recipe> getTrendingRecipes() {
        List<Long> trending = viewRecipeRepository.findTrendingRecipeIds();
        List<Long> recipeIds = trending;

        return recipeRepository.findAllById(recipeIds);
    }


    public List<Instruction> getInstructionsByRecipeId(Long recipeId) {
        return instructionRepository.findByRecipeId(recipeId);
    }

    public Nutrition getNutritionByRecipeId(Long recipeId) {
        return nutritionRepository.findByRecipeId(recipeId);
    }

    public Instruction saveInstruction(Instruction instruction) {
        return instructionRepository.save(instruction);
    }
    public Nutrition saveNutrition(Nutrition nutrition) {
        return nutritionRepository.save(nutrition);
    }   
}