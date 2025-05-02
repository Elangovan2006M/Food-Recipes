package com.example.foody.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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

    @Column(columnDefinition = "TEXT")
    private String overview;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Instruction> instructions;

    @OneToOne(mappedBy = "recipe", cascade = CascadeType.ALL)
    private Nutrition nutrition;

    public Integer getTotalViews() {
        return totalViews;
    }

    public void setTotalViews(Integer totalViews) {
        this.totalViews = totalViews;
    }


}
