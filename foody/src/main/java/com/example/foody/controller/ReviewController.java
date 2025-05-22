package com.example.foody.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.foody.model.Review;
import com.example.foody.service.ReviewService;

@CrossOrigin(origins = "*")
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

    @DeleteMapping("/review/{reviewId}")
    public void deleteReviews(@PathVariable Long reviewId) {
        reviewService.deleteReviewById(reviewId);
    }

    @GetMapping
    public Page<Review> getAllReviews(@RequestParam(defaultValue = "0") int page,
                                      @RequestParam(defaultValue = "10") int size) {
        return reviewService.getAllReviews(PageRequest.of(page, size));
    }
}
