package com.example.foody.controller;

import com.example.foody.dto.ChangePasswordRequest;
import com.example.foody.dto.LoginRequest;
import com.example.foody.model.Users;
import com.example.foody.service.UsersService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin-user")
public class UsersController {

    @Autowired
    private UsersService userService;

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody Users user) {
        return ResponseEntity.ok(userService.saveUser(user));
    }

    @GetMapping("/find/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        return ResponseEntity.ok(userService.findByEmail(email));
    }

    @PutMapping("/change-password")
public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request) {
    boolean updated = userService.updatePassword(request.getEmail(), request.getOldPassword(), request.getNewPassword());
    if (updated) {
        return ResponseEntity.ok("Password changed successfully.");
    } else {
        return ResponseEntity.badRequest().body("Old password is incorrect or user not found.");
    }
}
@PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<Users> optionaUser = userService.findByEmail(request.getEmail());
        if (optionaUser == null || !optionaUser.get().getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
        return ResponseEntity.ok("Login successful");
}
}

