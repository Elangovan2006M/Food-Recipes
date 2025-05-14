package com.example.foody.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foody.model.Logo;
import com.example.foody.repository.LogoRepository;

@Service
public class LogoService {
     @Autowired
    private LogoRepository logoRepository;

    public Logo saveLogo(Logo logo) {
        return logoRepository.save(logo);
    }

    public List<Logo> getAllLogos() {
        return logoRepository.findAll();
    }

    public Logo getLogoById(Long id) {
        return logoRepository.findById(id).orElse(null);
    }

    public Logo updateLogo(Long id, Logo updatedLogo) {
        Optional<Logo> existingLogo = logoRepository.findById(id);
        if (existingLogo.isPresent()) {
            Logo logo = existingLogo.get();
            logo.setImageName(updatedLogo.getImageName());
            logo.setImageUrl(updatedLogo.getImageUrl());
            return logoRepository.save(logo);
        } else {
            return null;
        }
    }

    public void deleteLogo(Long id) {
        logoRepository.deleteById(id);
    }

}
