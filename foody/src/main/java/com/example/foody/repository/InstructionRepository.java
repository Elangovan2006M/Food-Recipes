package com.example.foody.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.foody.model.Instruction;
@Repository
public interface InstructionRepository extends JpaRepository<Instruction, Long> {
    Instruction findByRecipeId(Long recipeId);

}
