package com.example.foody.controller;

import com.example.foody.dto.ChangePasswordRequest;
import com.example.foody.dto.LoginRequestDto;
import com.example.foody.dto.LoginResponseDto;
import com.example.foody.model.Users;
import com.example.foody.service.UsersService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UsersController {

    @Autowired
    private UsersService userService;

    @GetMapping("/admin/all")
    public List<Users> getAllAdmins() {
        return userService.getAllAdmins();
    }
    

    @PostMapping("/admin/register")
    public ResponseEntity<Users> registerAdmin(@RequestBody Users admin) {
        return ResponseEntity.ok(userService.registerAdmin(admin));
    }

    @PostMapping("/user/register")
    public ResponseEntity<Users> registerUser(@RequestBody Users user) {
        return ResponseEntity.ok(userService.registerUsers(user));
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
    // @Autowired
    // private PasswordEncoder passwordEncoder;

    @PostMapping("/admin/login")
    public ResponseEntity<LoginResponseDto> loginAdmin(@RequestBody LoginRequestDto request) {
        LoginResponseDto response = userService.loginAdmin(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/user/login")
    public ResponseEntity<LoginResponseDto> loginUser(@RequestBody LoginRequestDto request) {
        LoginResponseDto response = userService.loginUser(request);
        return ResponseEntity.ok(response);
    }

}
