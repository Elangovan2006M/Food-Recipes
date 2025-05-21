package com.example.foody.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.foody.model.Review;
import com.example.foody.model.Users;
import com.example.foody.repository.ReviewRepository;
import com.example.foody.repository.UsersRepository;

import jakarta.transaction.Transactional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;
    
    @Autowired
    private UsersRepository usersRepository;


     public Review addReview(Review review) {
        if (review.getUser() == null || review.getUser().getId() == null) {
            throw new IllegalArgumentException("User ID must be provided");
        }

        // Fetch user from DB to get the username
        Users user = usersRepository.findById(review.getUser().getId())
                                  .orElseThrow(() -> new RuntimeException("User not found"));

        review.setUsername(user.getUsername());  // Set username manually

        return reviewRepository.save(review);
    }

    public Page<Review> getReviewsByRecipeId(Long recipeId, Pageable pageable) {
        return reviewRepository.findByRecipeId(recipeId, pageable);
    }

    @Transactional
    public void deleteReviewsByRecipeId(Long recipeId) {
        reviewRepository.deleteByRecipeId(recipeId);
    }
}
