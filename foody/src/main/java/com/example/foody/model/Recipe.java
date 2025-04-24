package com.example.foody.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

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

    private String Cusions;

    private String preTime;
    
    private String cookTime;
    
    private String totalTime;

    
}

