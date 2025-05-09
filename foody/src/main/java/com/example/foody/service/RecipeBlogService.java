package com.example.foody.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.foody.model.Recipe;
import com.example.foody.model.RecipeBlog;
import com.example.foody.repository.RecipeBlogRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class RecipeBlogService {

    @Autowired
    private RecipeBlogRepository recipeBlogRepository;

    public Page<RecipeBlog> getAllBlogs(Pageable pageable) {
        return recipeBlogRepository.findAll(pageable);
    }

    public RecipeBlog getBlogById(Integer id) {
        return recipeBlogRepository.findById(id).orElseThrow(() -> new RuntimeException("Blog not found"));
    }

    public RecipeBlog getRecentBlog() {
        return recipeBlogRepository.findTop1ByOrderByCreatedAtDesc();
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
