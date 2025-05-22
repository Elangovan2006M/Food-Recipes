package com.example.foody.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.foody.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{
        Optional<Admin> findByEmail(String email);
}
