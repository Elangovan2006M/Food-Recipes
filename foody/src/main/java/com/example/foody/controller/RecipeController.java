package com.example.foody.controller;

import com.example.foody.model.Recipe;
import com.example.foody.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable Long id) {
        return recipeService.getRecipeById(id);
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
}
