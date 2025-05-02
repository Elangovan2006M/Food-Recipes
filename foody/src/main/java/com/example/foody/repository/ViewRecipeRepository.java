package com.example.foody.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.foody.model.ViewRecipe;

@Repository
public interface ViewRecipeRepository extends JpaRepository<ViewRecipe, Long> {

    //Query for trending recipe in the last 7 days

    @Query(value = "SELECT recipe_id FROM view_recipe WHERE viewed_at >= CURRENT_DATE - INTERVAL 7 DAY GROUP BY recipe_id ORDER BY COUNT(*) DESC", nativeQuery = true)
    List<Long> findTrendingRecipeIds();

}

