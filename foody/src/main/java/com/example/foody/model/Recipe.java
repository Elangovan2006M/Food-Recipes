package com.example.foody.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String foodName;
    private String description;
    private String imageUrl;
    private String videoUrl;
    private String ingredients;
    private String cuisines;
    private double prepTime;
    private double cookTime;
    private double totalTime;
    private String difficulty;
    private String foodType;

    @Column(name = "total_views")
    private Integer totalViews;
}