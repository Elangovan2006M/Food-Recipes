package com.example.foody.controller;

import com.example.foody.dto.ChangePasswordRequest;
import com.example.foody.dto.LoginRequestDto;
import com.example.foody.dto.LoginResponseDto;
import com.example.foody.model.Admin;
import com.example.foody.service.AdminService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/admin/all")
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }
    

    @PostMapping("/admin/register")
    public ResponseEntity<Admin> registerAdmin(@RequestBody Admin admin) {
        return ResponseEntity.ok(adminService.registerAdmin(admin));
    }

    @PostMapping("/user/register")
    public ResponseEntity<Admin> registerUser(@RequestBody Admin user) {
        return ResponseEntity.ok(adminService.registerUsers(user));
    }

    @GetMapping("/find/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        return ResponseEntity.ok(adminService.findByEmail(email));
    }

    @PutMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request) {
        boolean updated = adminService.updatePassword(request.getEmail(), request.getOldPassword(), request.getNewPassword());
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
        System.err.println("Received login request:");
        System.err.println("Email: " + request.getEmail());
        System.err.println("Password: " + request.getPassword());
        LoginResponseDto response = adminService.loginAdmin(request);

        if (response.isSuccess()) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }


    @PostMapping("/user/login")
    public ResponseEntity<LoginResponseDto> loginUser(@RequestBody LoginRequestDto request) {
        LoginResponseDto response = adminService.loginUsers(request);
        if(response.isSuccess())
        {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

}
