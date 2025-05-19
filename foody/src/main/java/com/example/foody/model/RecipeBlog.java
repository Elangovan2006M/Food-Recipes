package com.example.foody.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


@Entity
@Table(name = "recipe_blog")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecipeBlog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer blogId;

    @Column(nullable = false, length = 100)
    private String recipeName;

    @Column(nullable = false, length = 255)
    private String recipeImgUrl;

    @Column(columnDefinition = "TEXT")
    private String overview;

    @Column(columnDefinition = "TEXT")
    private String history;

    @Column(nullable = false, length = 255)
    private String historyImg1;

    @Column(nullable = false, length = 255)
    private String historyImg2;

    @Column(columnDefinition = "TEXT")
    private String variations;

    @Column(columnDefinition = "TEXT")
    private String alsoKnownAs;

    @Column(columnDefinition = "TEXT")
    private String proTips;

    @Column(columnDefinition = "TEXT")
    private String bestServedWith;

    @Column(name = "created_at", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP", updatable = false, insertable = false)
    private LocalDateTime createdAt;

    @OneToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    public Recipe getRecipe() {
        return recipe;
    }   

    public void setBlogId(Integer blogId) {
        this.blogId = blogId;
    }

    public void setRecipeName(String recipeName) {
        this.recipeName = recipeName;
    }

    public void setRecipeImgUrl(String recipeImgUrl) {
        this.recipeImgUrl = recipeImgUrl;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public void setHistory(String history) {
        this.history = history;
    }

    public void setHistoryImg1(String historyImg1) {
        this.historyImg1 = historyImg1;
    }

    public void setHistoryImg2(String historyImg2) {
        this.historyImg2 = historyImg2;
    }

    public void setVariations(String variations) {
        this.variations = variations;
    }

    public void setAlsoKnownAs(String alsoKnownAs) {
        this.alsoKnownAs = alsoKnownAs;
    }

    public void setProTips(String proTips) {
        this.proTips = proTips;
    }

    public void setBestServedWith(String bestServedWith) {
        this.bestServedWith = bestServedWith;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public Integer getBlogId() {
        return blogId;
    }

    public String getRecipeName() {
        return recipeName;
    }

    public String getRecipeImgUrl() {
        return recipeImgUrl;
    }

    public String getOverview() {
        return overview;
    }

    public String getHistory() {
        return history;
    }

    public String getHistoryImg1() {
        return historyImg1;
    }

    public String getHistoryImg2() {
        return historyImg2;
    }

    public String getVariations() {
        return variations;
    }

    public String getAlsoKnownAs() {
        return alsoKnownAs;
    }

    public String getProTips() {
        return proTips;
    }

    public String getBestServedWith() {
        return bestServedWith;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
