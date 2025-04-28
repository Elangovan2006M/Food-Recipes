package com.example.foody.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecipeSearchRequest {
    private List<String> cuisines;
    private List<String> foodTypes;
    private List<String> difficulties;
    private Integer maxTime;
}