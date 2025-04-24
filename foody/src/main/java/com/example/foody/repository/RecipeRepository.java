package com.example.foody.repository;

import com.example.foody.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    // Search by partial or full food name (case-insensitive)
    List<Recipe> findByFoodNameContainingIgnoreCase(String foodName);

    // Search by cuisines (case-insensitive)
    List<Recipe> findByCuisinesContainingIgnoreCase(String cuisines);

    // Search by total time less than or equal to
    List<Recipe> findByTotalTimeLessThanEqual(double totalTime);

    // Search by food type (breakfast, lunch, dinner)
    List<Recipe> findByFoodTypeIgnoreCase(String foodType);

    // Search by difficulty (Easy, Medium, Hard)
    List<Recipe> findByDifficultyIgnoreCase(String difficulty);
}
