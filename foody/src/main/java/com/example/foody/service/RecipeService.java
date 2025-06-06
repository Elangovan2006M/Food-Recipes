package com.example.foody.service;

import com.example.foody.model.Nutrition;
import com.example.foody.model.Recipe;
import com.example.foody.model.ViewRecipe;
import com.example.foody.repository.RecipeRepository;
import com.example.foody.repository.ViewRecipeRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

import com.example.foody.model.Instruction;
import com.example.foody.repository.InstructionRepository;
import com.example.foody.repository.NutritionRepository;
import com.example.foody.repository.ReviewRepository;

@Service
public class RecipeService {

    private final ViewRecipeRepository viewRecipeRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private InstructionRepository instructionRepository;

    @Autowired
    private NutritionRepository nutritionRepository;

    @Autowired
    private ReviewRepository reviewRepository;


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
    // Ensure the recipe object is not null
        if (recipe == null) {
            throw new IllegalArgumentException("Recipe cannot be null");
        }

        // Manage Instruction child
        Instruction instruction = recipe.getInstructions();
        if (instruction != null) {
            instruction.setRecipe(recipe);
            recipe.setInstructions(instruction);
        }

        // Manage Nutrition child
        Nutrition nutrition = recipe.getNutrition();
        if (nutrition != null) {
            nutrition.setRecipe(recipe);
            recipe.setNutrition(nutrition);
        }

        return recipeRepository.save(recipe);
    }


    public Recipe updateRecipe(Long id, Recipe updatedRecipe) {
        Recipe existingRecipe = recipeRepository.findById(id)
            .orElseThrow(() -> new NoSuchElementException("Recipe not found with ID: " + id));

        existingRecipe.setFoodName(updatedRecipe.getFoodName());
        existingRecipe.setDescription(updatedRecipe.getDescription());
        existingRecipe.setImageUrl(updatedRecipe.getImageUrl());
        existingRecipe.setVideoUrl(updatedRecipe.getVideoUrl());
        existingRecipe.setIngredients(updatedRecipe.getIngredients());
        existingRecipe.setCuisines(updatedRecipe.getCuisines());
        existingRecipe.setPrepTime(updatedRecipe.getPrepTime());
        existingRecipe.setCookTime(updatedRecipe.getCookTime());
        existingRecipe.setTotalTime(updatedRecipe.getTotalTime());
        existingRecipe.setDifficulty(updatedRecipe.getDifficulty());
        existingRecipe.setFoodType(updatedRecipe.getFoodType());
        existingRecipe.setOverview(updatedRecipe.getOverview());

        // Update instruction
        if (updatedRecipe.getInstructions() != null) {
            Instruction updatedInstruction = updatedRecipe.getInstructions();
            updatedInstruction.setId(existingRecipe.getInstructions().getId());
            updatedInstruction.setRecipe(existingRecipe);
            existingRecipe.setInstructions(updatedInstruction);
        }

        // Update nutrition
        if (updatedRecipe.getNutrition() != null) {
            Nutrition updatedNutrition = updatedRecipe.getNutrition();
            updatedNutrition.setId(existingRecipe.getNutrition().getId()); 
            updatedNutrition.setRecipe(existingRecipe);
            existingRecipe.setNutrition(updatedNutrition);
        }

        return recipeRepository.save(existingRecipe);
    }
    
    @Transactional
        public void deleteRecipe(Long id) {
            viewRecipeRepository.deleteByRecipeId(id);
            reviewRepository.deleteByRecipeId(id);  
            recipeRepository.deleteById(id);            
        }


    // Search Methods
    public List<Recipe> searchByFoodName(String foodName) {
        return recipeRepository.findByFoodNameContainingIgnoreCase(foodName);
    }
    
    
    public Page<Recipe> getAllRecipes(Pageable pageable) {
        return recipeRepository.findAll(pageable);
    }
    
    public Page<Recipe> searchByCuisines(String cuisines, Pageable pageable) {
        return recipeRepository.findByCuisinesContainingIgnoreCase(cuisines, pageable);
    }
    
    public Page<Recipe> searchByTotalTime(double totalTime, Pageable pageable) {
        return recipeRepository.findByTotalTimeLessThanEqual(totalTime, pageable);
    }
    
    public Page<Recipe> searchByFoodType(String foodType, Pageable pageable) {
        return recipeRepository.findByFoodTypeIgnoreCase(foodType, pageable);
    }
    
    public Page<Recipe> searchByDifficulty(String difficulty, Pageable pageable) {
        return recipeRepository.findByDifficultyIgnoreCase(difficulty, pageable);
    }
    
    
    //View Recipe - Trending and popular
    
    @Transactional
    public Recipe trackView(Long recipeId, String ipAddress) {
        Recipe recipe = recipeRepository.findById(recipeId)
        .orElseThrow(() -> new RuntimeException("Recipe not found"));
        
        recipe.setTotalViews(recipe.getTotalViews() + 1);
        recipeRepository.save(recipe);
        
        ViewRecipe view = new ViewRecipe();
        view.setRecipe(recipe);
        view.setIpAddress(ipAddress);
        viewRecipeRepository.save(view);
        return recipeRepository.findById(recipeId).orElse(null);
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


    public Instruction getInstructionsByRecipeId(Long recipeId) {
        return instructionRepository.findByRecipeId(recipeId);
    }

    public Nutrition getNutritionByRecipeId(Long recipeId) {
        return nutritionRepository.findByRecipeId(recipeId);
    }


}