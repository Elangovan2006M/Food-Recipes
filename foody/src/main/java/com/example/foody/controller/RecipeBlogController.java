package com.example.foody.controller;

import com.example.foody.model.RecipeBlog;
import com.example.foody.service.RecipeBlogService;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/blogs")
@CrossOrigin(origins = "http://localhost:3000")  // allow your React dev server
public class RecipeBlogController {

    private final RecipeBlogService svc;

    public RecipeBlogController(RecipeBlogService svc) {
        this.svc = svc;
    }

    /**
     * GET /api/blogs
     */
    @GetMapping
    public List<RecipeBlog> getAllBlogs() {
        return svc.getAllBlogs();
    }

    /**
     * GET /api/blogs/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<RecipeBlog> getBlogById(@PathVariable Integer id) {
        RecipeBlog blog = svc.getBlogById(id);
        if (blog == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(blog);
    }

    /**
     * GET /api/blogs/recent-blog (Now fetches only 1 blog)
     */
    @GetMapping("/recent-blog")
    public ResponseEntity<RecipeBlog> getRecentBlog() {
        RecipeBlog blog = svc.getRecentBlog();
        if (blog == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(blog);
    }
}
