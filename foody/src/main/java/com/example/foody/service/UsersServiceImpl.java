package com.example.foody.service;

import com.example.foody.model.Users;
import com.example.foody.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.List;
import java.util.Optional;

@Service
public class UsersServiceImpl implements UsersService {

    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<Users> getAllAdmins()
    {
        return userRepository.findAll();
    }
    @Override

    public Users saveUser(Users user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCreatedAt(LocalDateTime.now());
        user.setPasswordChanged(false);
        return userRepository.save(user);
    }

    @Override
    public Optional<Users> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public boolean updatePassword(String email, String oldPassword, String newPassword) {
        Optional<Users> optionalUser = userRepository.findByEmail(email);
        
        if (optionalUser.isEmpty()) {
            return false;
        }

        Users user = optionalUser.get();

        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            return false;
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        return true;
    }
}
