package com.example.foody.controller;

import com.example.foody.model.Recipe;
import com.example.foody.model.RecipeBlog;
import com.example.foody.service.RecipeBlogService;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/blogs")
@CrossOrigin(origins = "*") // allow your React dev server
public class RecipeBlogController {

    private final RecipeBlogService svc;

    public RecipeBlogController(RecipeBlogService svc) {
        this.svc = svc;
    }

    /**
     * GET /api/blogs
     */
    @GetMapping
    public Page<RecipeBlog> getAllBlogs(@RequestParam(defaultValue = "0") Integer page,
                                        @RequestParam(defaultValue = "10") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return svc.getAllBlogs(pageable);
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
    @GetMapping("/{id}/recipes")
    public Recipe getRecipeFromBlog(@PathVariable Integer id) {
        return svc.getRecipeFromBlog(id);
    }

    @GetMapping("/count")
    public long countAllBlogs() {
        return svc.countAllBlogs();
    }

    @PostMapping
    public ResponseEntity<RecipeBlog> createBlog(@RequestBody RecipeBlog blog) {
        return ResponseEntity.ok(svc.createBlog(blog));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RecipeBlog> updateBlog(@PathVariable Integer id, @RequestBody RecipeBlog updatedBlog) {
        return ResponseEntity.ok(svc.updateBlog(id, updatedBlog));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable Integer id) {
        svc.deleteBlog(id);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("/search")
    public ResponseEntity<Page<RecipeBlog>> searchBlogByName(
            @RequestParam String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Page<RecipeBlog> blogPage = svc.searchBlogByName(name, page, size);
        if (blogPage.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(blogPage);
    }

    @GetMapping("/suggestions")
    public List<String> getSuggestions(@RequestParam String query) {
        return svc.getRecipeNameSuggestions(query);
    }

}
