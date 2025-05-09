package com.example.foody.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Nutrition {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private double calories;
    private double sugar;
    private double protein;
    private double fat;
    private double fiber;
    private double carbohydrates;

    @OneToOne
    @JoinColumn(name = "recipe_id")
    @JsonBackReference
    private Recipe recipe;
}
