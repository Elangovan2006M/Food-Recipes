package com.example.foody.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foody.model.Users;
import com.example.foody.repository.UsersRepository;

import jakarta.transaction.Transactional;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public Users createUser(Users user) {
        return usersRepository.save(user);
    }

    @Transactional
    public void deleteUserById(Long id) {
        usersRepository.deleteById(id);
    }

    public Optional<Users> getUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }
}
