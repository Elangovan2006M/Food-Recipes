package com.example.foody.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.foody.model.RecipeBlog;

@Repository
public interface RecipeBlogRepository extends JpaRepository<RecipeBlog, Integer> {

    Page<RecipeBlog> findByRecipeNameContainingIgnoreCase(String recipeName, Pageable pageable);

    RecipeBlog findTop1ByOrderByCreatedAtDesc();
    // List<RecipeBlog> findByRecipeNameContainingIgnoreCase(String name);

    @Query("SELECT b.recipeName FROM Blog b WHERE LOWER(b.recipeName) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<String> findRecipeNameSuggestions(String query);

}
