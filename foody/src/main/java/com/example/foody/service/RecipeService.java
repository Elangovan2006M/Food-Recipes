package com.example.foody.service;

import java.util.List;

import javax.swing.text.GapContent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foody.model.Recipe;
import com.example.foody.repository.RecipeRepository;

@Service
public class RecipeService {
        @Autowired
        private RecipeRepository recipeRepository;

        
    
}
