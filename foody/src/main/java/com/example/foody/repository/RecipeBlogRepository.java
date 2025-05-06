package com.example.foody.repository;

import com.example.foody.model.RecipeBlog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeBlogRepository extends JpaRepository<RecipeBlog, Integer> {

    RecipeBlog findTopByOrderByCreatedAtDesc();
    // List<RecipeBlog> findByRecipeNameContainingIgnoreCase(String name);

}
