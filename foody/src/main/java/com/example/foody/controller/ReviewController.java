package com.example.foody.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import com.example.foody.model.Review;
import com.example.foody.service.ReviewService;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    // Create a new review
    @PostMapping
    public Review createReview(@RequestBody Review review) {
        return reviewService.addReview(review);
    }

    // Get paginated reviews for a recipe
    @GetMapping("/{recipeId}")
    public Page<Review> getReviewsByRecipe(
            @PathVariable Long recipeId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        return reviewService.getReviewsByRecipeId(recipeId, PageRequest.of(page, size));
    }

    // Delete all reviews for a recipe
    @DeleteMapping("/{recipeId}")
    public void deleteReviewsByRecipe(@PathVariable Long recipeId) {
        reviewService.deleteReviewsByRecipeId(recipeId);
    }
}
