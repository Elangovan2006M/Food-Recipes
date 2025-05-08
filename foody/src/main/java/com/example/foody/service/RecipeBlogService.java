package com.example.foody.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.foody.model.Recipe;
import com.example.foody.model.RecipeBlog;
import com.example.foody.repository.RecipeBlogRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class RecipeBlogService {

    private final RecipeBlogRepository recipeBlogRepository;

    public List<RecipeBlog> getAllBlogs() {
        return recipeBlogRepository.findAll();
    }

    public RecipeBlog getBlogById(Integer id) {
        return recipeBlogRepository.findById(id).orElseThrow(() -> new RuntimeException("Blog not found"));
    }

    public RecipeBlog getRecentBlog() {
        return recipeBlogRepository.findTopByOrderByCreatedAtDesc();
    }

    public Recipe getRecipeFromBlog(Integer blogId) {
        RecipeBlog blog = recipeBlogRepository.findById(blogId)
            .orElseThrow(() -> new RuntimeException("Blog not found"));
        return blog.getRecipe(); // Accessing the associated Recipe directly
    }

    // public RecipeBlog createBlog(RecipeBlog blog) {
    //     return recipeBlogRepository.save(blog);
    // }

    // public void deleteBlog(Integer id) {
    //     recipeBlogRepository.deleteById(id);
    // }
}
