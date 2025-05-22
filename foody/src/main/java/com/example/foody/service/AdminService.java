package com.example.foody.service;

import com.example.foody.dto.LoginRequestDto;
import com.example.foody.dto.LoginResponseDto;
import com.example.foody.model.Admin;
import com.example.foody.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService{

    @Autowired
    private AdminRepository adminRepository;


    public List<Admin> getAllAdmins()
    {
        return adminRepository.findAll();
    }

    public Admin registerAdmin(Admin admin) {
        admin.setEmail(admin.getEmail());
        admin.setPassword(admin.getPassword());
        admin.setRole("admin");
        admin.setCreatedAt(LocalDateTime.now());
        admin.setPasswordChanged(false);
        admin.setUserName(admin.getUserName());
        return adminRepository.save(admin);
    }
    public Admin registerUsers(Admin user) {
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setRole("user");
        user.setCreatedAt(LocalDateTime.now());
        user.setPasswordChanged(false);
        user.setUserName(user.getUserName());
        return adminRepository.save(user);
    }

    public Optional<Admin> findByEmail(String email) {
        return adminRepository.findByEmail(email);
    }

    public LoginResponseDto loginUsers(LoginRequestDto dto) {
        Admin user = adminRepository.findByEmail(dto.getEmail())
                    .orElse(null);
        if (user != null && user.getPassword().equals(dto.getPassword()) && "user".equalsIgnoreCase(user.getRole())) {
            return new LoginResponseDto(true, user.getRole(), "Login successful", user.getUserName());
        }
        return new LoginResponseDto(false, null, "Invalid credentials", null);
        }

    public LoginResponseDto loginAdmin(LoginRequestDto dto) {
        Admin admin = adminRepository.findByEmail(dto.getEmail())
                    .orElse(null);
        if (admin != null && admin.getPassword().equals(dto.getPassword()) && "admin".equalsIgnoreCase(admin.getRole())) {
            return new LoginResponseDto(true, admin.getRole(), "Login successful", admin.getUserName());
        }
        return new LoginResponseDto(false, null, "Invalid credentials or not an admin", null);
    }


    public boolean updatePassword(String email, String oldPassword, String newPassword) {
        Optional<Admin> optionalAdmin = adminRepository.findByEmail(email);

        if (optionalAdmin.isEmpty()) {
            return false;
        }

        Admin admin = optionalAdmin.get();

        // Plain text comparison (NOT RECOMMENDED for real apps)
        if (!oldPassword.equals(admin.getPassword())) {
            return false;
        }

        admin.setPassword(newPassword);
        adminRepository.save(admin);
        return true;
    }

}
