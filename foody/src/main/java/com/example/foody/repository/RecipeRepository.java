package com.example.foody.repository;


import com.example.foody.model.Recipe;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    // Search by partial or full food name (case-insensitive an Similar)
    @Query("SELECT r FROM Recipe r WHERE LOWER(r.foodName) LIKE LOWER(CONCAT('%', ?1, '%'))")
    List<Recipe> findByFoodNameContainingIgnoreCase(String foodName);
    
    Page<Recipe> findAll(Pageable pageable);
    
    Page<Recipe> findByCuisinesContainingIgnoreCase(String cuisines, Pageable pageable);

    Page<Recipe> findByTotalTimeLessThanEqual(double totalTime, Pageable pageable);

    Page<Recipe> findByFoodTypeIgnoreCase(String foodType, Pageable pageable);

    Page<Recipe> findByDifficultyIgnoreCase(String difficulty, Pageable pageable);
    //Popular views
    @Query("SELECT r FROM Recipe r ORDER BY r.totalViews DESC")
    List<Recipe> findTopViewedRecipes();

}
