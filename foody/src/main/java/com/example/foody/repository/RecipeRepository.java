package com.example.foody.repository;


import com.example.foody.model.Recipe;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    // Search by partial or full food name (case-insensitive an Similar)
    @Query("SELECT r FROM Recipe r WHERE LOWER(r.foodName) LIKE LOWER(CONCAT('%', ?1, '%'))")
    List<Recipe> findByFoodNameContainingIgnoreCase(String foodName);
    //Fetch all recipes with pagination
    Page<Recipe> findAll(Pageable pageable);
    //Fetch recipes by cuisine with pagination
    Page<Recipe> findByCuisinesContainingIgnoreCase(String cuisines, Pageable pageable);
    //Fetch recipes by total time with pagination
    Page<Recipe> findByTotalTimeLessThanEqual(double totalTime, Pageable pageable);
    //Fetch recipes by food type with pagination
    Page<Recipe> findByFoodTypeIgnoreCase(String foodType, Pageable pageable);
    //Fetch recipes by difficulty with pagination
    Page<Recipe> findByDifficultyIgnoreCase(String difficulty, Pageable pageable);
    //Popular views
    @Query("SELECT r FROM Recipe r ORDER BY r.totalViews DESC LIMIT 6")
    List<Recipe> findTopViewedRecipes();

}
