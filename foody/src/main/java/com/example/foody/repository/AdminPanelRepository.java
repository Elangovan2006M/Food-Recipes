package com.example.foody.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.foody.model.AdminPanel;

@Repository
public interface  AdminPanelRepository extends JpaRepository<AdminPanel, Long> {
    
}
