package com.example.foody.controller;

import com.example.foody.model.Nutrition;
import com.example.foody.model.Recipe;
import com.example.foody.service.RecipeService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

import com.example.foody.model.Instruction;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

//     @GetMapping("/{id}")
//     public ResponseEntity<Recipe> getRecipeAndTrackView(@PathVariable Long id, HttpServletRequest request) {
//         String ip = request.getRemoteAddr();
//         recipeService.trackView(id, ip);
//         Recipe recipe = recipeService.getRecipeById(id);
//         return ResponseEntity.ok(recipe);
// }
    @GetMapping("/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable Long id, HttpServletRequest request) {
        String ipAddress = request.getRemoteAddr();
        try {
            recipeService.trackView(id, ipAddress); //  this does everything
            Recipe recipe = recipeService.getRecipeById(id);
            return ResponseEntity.ok(recipe);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }



    @PostMapping
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeService.saveRecipe(recipe);
    }

    // Search endpoints
    @GetMapping("/search/foodName")
    public List<Recipe> searchByFoodName(@RequestParam String name) {
        return recipeService.searchByFoodName(name);
    }

    @GetMapping("/search/cuisines")
    public List<Recipe> searchByCuisines(@RequestParam String cuisines) {
        return recipeService.searchByCuisines(cuisines);
    }

    @GetMapping("/search/totalTime")
    public List<Recipe> searchByTotalTime(@RequestParam double time) {
        return recipeService.searchByTotalTime(time);
    }

    @GetMapping("/search/foodType")
    public List<Recipe> searchByFoodType(@RequestParam String type) {
        return recipeService.searchByFoodType(type);
    }

    @GetMapping("/search/difficulty")
    public List<Recipe> searchByDifficulty(@RequestParam String level) {
        return recipeService.searchByDifficulty(level);
    }
    @GetMapping("/popular")
    public List<Recipe> getPopularRecipes() {
    return recipeService.getPopularRecipes();
    }


    @GetMapping("/trending")
    public List<Recipe> getTrendingRecipes() {
        return recipeService.getTrendingRecipes();
    }

    @PutMapping("/{id}/view")
    public ResponseEntity<?> trackRecipeView(@PathVariable Long id, HttpServletRequest request) {
        String ip = request.getRemoteAddr();
        Recipe updatedRecipe = recipeService.trackView(id, ip);
        return ResponseEntity.ok(updatedRecipe);
        
    }


    @GetMapping("/{id}/instructions")
    public Instruction getInstructionsByRecipeId(@PathVariable Long id) {
        return recipeService.getInstructionsByRecipeId(id);
    }


    @GetMapping("/{id}/nutrition")
    public Nutrition getNutritionByRecipeId(@PathVariable Long id) {
        return recipeService.getNutritionByRecipeId(id);
    }

    @PostMapping("/nutrition")
    public Nutrition createNutrition(@RequestBody Nutrition nutrition) {
        return recipeService.saveNutrition(nutrition);
    }

    @PostMapping("/instructions")
    public Instruction createInstruction(@RequestBody Instruction instruction) {
        return recipeService.saveInstruction(instruction);
    }
}
