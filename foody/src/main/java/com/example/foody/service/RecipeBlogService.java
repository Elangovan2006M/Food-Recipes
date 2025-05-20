package com.example.foody.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

    public long countAllBlogs()
    {
        return recipeBlogRepository.count();
    }

    // public RecipeBlog createBlog(RecipeBlog blog) {
    //     return recipeBlogRepository.save(blog);
    // }

    public RecipeBlog createBlog(RecipeBlog blog) {
        return recipeBlogRepository.save(blog);
    }

    public RecipeBlog updateBlog(Integer id, RecipeBlog updatedBlog) {
        RecipeBlog existing = recipeBlogRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Blog not found"));

        // Update fields manually
        existing.setRecipeName(updatedBlog.getRecipeName());
        existing.setRecipeImgUrl(updatedBlog.getRecipeImgUrl());
        existing.setOverview(updatedBlog.getOverview());
        existing.setHistory(updatedBlog.getHistory());
        existing.setHistoryImg1(updatedBlog.getHistoryImg1());
        existing.setHistoryImg2(updatedBlog.getHistoryImg2());
        existing.setVariations(updatedBlog.getVariations());
        existing.setAlsoKnownAs(updatedBlog.getAlsoKnownAs());
        existing.setProTips(updatedBlog.getProTips());
        existing.setBestServedWith(updatedBlog.getBestServedWith());
        existing.setRecipe(updatedBlog.getRecipe());

        return recipeBlogRepository.save(existing);
    }

    public void deleteBlog(Integer id) {
        recipeBlogRepository.deleteById(id);
    }

    public Page<RecipeBlog> searchBlogByName(String recipeName, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return recipeBlogRepository.findByRecipeNameContainingIgnoreCase(recipeName, pageable);
    }

    
    public List<String> getRecipeNameSuggestions(String query) {
        return recipeBlogRepository.findRecipeNameSuggestions(query);
    }

}
