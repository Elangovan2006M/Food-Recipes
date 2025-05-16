package com.example.foody.service;

import com.example.foody.model.SocialMedia;
import com.example.foody.repository.SocialMediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SocialMediaService {

    @Autowired
    private SocialMediaRepository socialMediaRepository;

    public List<SocialMedia> getAllSocialMedia() {
        return socialMediaRepository.findAll();
    }

    public SocialMedia getSocialMediaById(Long id) {
        return socialMediaRepository.findById(id).orElse(null);
    }

    public SocialMedia saveSocialMedia(SocialMedia socialMedia) {
        return socialMediaRepository.save(socialMedia);
    }

    public SocialMedia updateSocialMedia(Long id, SocialMedia updatedSocialMedia) {
        Optional<SocialMedia> optional = socialMediaRepository.findById(id);
        if (optional.isPresent()) {
            SocialMedia existing = optional.get();
            existing.setName(updatedSocialMedia.getName());
            existing.setUrl(updatedSocialMedia.getUrl());
            return socialMediaRepository.save(existing);
        }
        return null;
    }

    public boolean deleteSocialMedia(Long id) {
        if (socialMediaRepository.existsById(id)) {
            socialMediaRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
