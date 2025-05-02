package com.example.foody.repository;

import com.example.foody.model.Nutrition;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NutritionRepository extends JpaRepository<Nutrition, Long> {
    Nutrition findByRecipeId(Long recipeId);
}
