package com.example.foody.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foody.model.Recipe;
import com.example.foody.repository.RecipeRepository;

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
        public Recipe createRecipe(Recipe recipe) {
                return recipeRepository.save(recipe);
        }
}
