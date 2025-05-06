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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
}
