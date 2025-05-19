package com.example.foody.service;

import java.util.List;
import java.util.Optional;

import com.example.foody.model.Users;

public interface UsersService {
    Users saveUser(Users user);
    Optional<Users> findByEmail(String email);
    boolean updatePassword(String email, String oldPassword, String newPassword);

    List<Users> getAllAdmins();
}
