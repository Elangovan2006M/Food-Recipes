package com.example.foody.repository;

import com.example.foody.model.Instruction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InstructionRepository extends JpaRepository<Instruction, Long> {
    List<Instruction> findByRecipeId(Long recipeId);
}
