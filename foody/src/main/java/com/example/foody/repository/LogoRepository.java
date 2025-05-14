package com.example.foody.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.foody.model.Logo;

@Repository
public interface LogoRepository extends JpaRepository<Logo, Long> {
  
    
}
