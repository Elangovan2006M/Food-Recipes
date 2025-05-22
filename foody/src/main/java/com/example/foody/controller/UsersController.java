package com.example.foody.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.foody.model.Users;
import com.example.foody.service.UsersService;

import java.util.Optional;

import org.springframework.data.domain.Page;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UsersController {

    @Autowired
    private UsersService usersService;

    // Create a new user
    @PostMapping
    public Users createUser(@RequestBody Users user) {
        return usersService.createUser(user);
    }

    // Delete user by ID
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        usersService.deleteUserById(id);
    }

    // Get user by email
    @GetMapping("/email")
    public Users getUserByEmail(@RequestParam String email) {
        return usersService.getUserByEmail(email).orElse(null);
    }

    @GetMapping
    public Page<Users> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return usersService.getAllUsers(page, size);
    }
}
