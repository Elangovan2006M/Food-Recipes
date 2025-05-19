package com.example.foody.controller;

import com.example.foody.model.Logo;
import com.example.foody.service.LogoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/logos")
public class LogoController {

    @Autowired
    private LogoService logoService;

    @PostMapping
    public Logo createLogo(@RequestBody Logo logo) {
        return logoService.saveLogo(logo);
    }

    @GetMapping
    public List<Logo> getAllLogos() {
        return logoService.getAllLogos();
    }

    @GetMapping("/{id}")
    public Logo getLogoById(@PathVariable Long id) {
        return logoService.getLogoById(id);
    }

    @PutMapping("/{id}")
    public Logo updateLogo(@PathVariable Long id, @RequestBody Logo logo) {
        return logoService.updateLogo(id, logo);
    }

    @DeleteMapping("/{id}")
    public void deleteLogo(@PathVariable Long id) {
        logoService.deleteLogo(id);
    }

    

}
