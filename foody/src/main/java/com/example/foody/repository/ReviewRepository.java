package com.example.foody.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.foody.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    // Paginated fetch by recipe ID
    Page<Review> findByRecipeId(Long recipeId, Pageable pageable);

    // Delete all reviews by recipe ID
    void deleteByRecipeId(Long recipeId);
}
