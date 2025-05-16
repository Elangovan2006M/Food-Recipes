package com.example.foody.controller;

import com.example.foody.model.SocialMedia;
import com.example.foody.service.SocialMediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/socialmedia")
public class SocialMediaController {

    @Autowired
    private SocialMediaService socialMediaService;

    @GetMapping
    public ResponseEntity<List<SocialMedia>> getAll() {
        return ResponseEntity.ok(socialMediaService.getAllSocialMedia());
    }

    @PostMapping
    public ResponseEntity<SocialMedia> create(@RequestBody SocialMedia socialMedia) {
        return ResponseEntity.ok(socialMediaService.saveSocialMedia(socialMedia));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SocialMedia> update(@PathVariable Long id, @RequestBody SocialMedia socialMedia) {
        SocialMedia updated = socialMediaService.updateSocialMedia(id, socialMedia);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        boolean deleted = socialMediaService.deleteSocialMedia(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
