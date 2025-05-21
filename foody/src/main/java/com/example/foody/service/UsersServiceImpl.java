package com.example.foody.service;

import com.example.foody.dto.LoginRequestDto;
import com.example.foody.dto.LoginResponseDto;
import com.example.foody.model.Users;
import com.example.foody.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.List;
import java.util.Optional;

@Service
public class UsersServiceImpl implements UsersService {

    @Autowired
    private UsersRepository userRepository;

    // @Autowired
    // private PasswordEncoder passwordEncoder;

    @Override
    public List<Users> getAllAdmins()
    {
        return userRepository.findAll();
    }
    @Override

    public Users registerAdmin(Users admin) {
        admin.setEmail(admin.getEmail());
        admin.setPassword(admin.getPassword());
        admin.setRole("admin");
        admin.setCreatedAt(LocalDateTime.now());
        admin.setPasswordChanged(false);
        admin.setUserName(admin.getUserName());
        return userRepository.save(admin);
    }
    public Users registerUsers(Users user) {
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setRole("user");
        user.setCreatedAt(LocalDateTime.now());
        user.setPasswordChanged(false);
        user.setUserName(user.getUserName());
        return userRepository.save(user);
    }

    @Override
    public Optional<Users> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public LoginResponseDto loginUser(LoginRequestDto dto) {
        Users user = userRepository.findByEmail(dto.getEmail())
                    .orElse(null);
        if (user != null && user.getPassword().equals(dto.getPassword()) && "user".equalsIgnoreCase(user.getRole())) {
            return new LoginResponseDto(true, user.getRole(), "Login successful", user.getUserName());
        }
        return new LoginResponseDto(false, null, "Invalid credentials", null);
        }

    public LoginResponseDto loginAdmin(LoginRequestDto dto) {
        Users admin = userRepository.findByEmail(dto.getEmail())
                    .orElse(null);
        if (admin != null && admin.getPassword().equals(dto.getPassword()) && "admin".equalsIgnoreCase(admin.getRole())) {
            return new LoginResponseDto(true, admin.getRole(), "Login successful", admin.getUserName());
        }
        return new LoginResponseDto(false, null, "Invalid credentials or not an admin", null);
    }


    @Override
    public boolean updatePassword(String email, String oldPassword, String newPassword) {
        Optional<Users> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isEmpty()) {
            return false;
        }

        Users user = optionalUser.get();

        // Plain text comparison (NOT RECOMMENDED for real apps)
        if (!oldPassword.equals(user.getPassword())) {
            return false;
        }

        user.setPassword(newPassword);
        userRepository.save(user);
        return true;
    }

}
