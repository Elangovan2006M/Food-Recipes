package com.example.foody.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foody.repository.AdminPanelRepository;

@Service
public class AdminPanelService {

    @Autowired
    private AdminPanelRepository adminPanelRepository;

}
