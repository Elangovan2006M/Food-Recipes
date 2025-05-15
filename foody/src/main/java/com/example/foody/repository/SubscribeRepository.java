package com.example.foody.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.foody.model.Subscribe;

@Repository
public interface SubscribeRepository extends JpaRepository<Subscribe, Long> {
    
    boolean existsByEmail(String email);

    // For pagination (get all with pagination)
    Page<Subscribe> findAll(Pageable pageable);

    // For search by email with pagination
    Page<Subscribe> findByEmailContainingIgnoreCase(String email, Pageable pageable);
}
