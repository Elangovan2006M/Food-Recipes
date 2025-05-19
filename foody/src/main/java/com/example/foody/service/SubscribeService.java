package com.example.foody.service;

import com.example.foody.model.Subscribe;
import com.example.foody.repository.SubscribeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class SubscribeService {

    @Autowired
    private SubscribeRepository repository;

    // Save new email
    public Subscribe saveEmail(String email) {
        if (repository.existsByEmail(email)) {
            return null;
        }

        Subscribe subscriber = new Subscribe();
        subscriber.setEmail(email);

        return repository.save(subscriber);
    }

    // Get all subscribers with pagination
    public Page<Subscribe> getAllSubscribers(Pageable pageable) {
        return repository.findAll(pageable);
    }

    // Search subscribers by email (with pagination)
    public Page<Subscribe> searchByEmail(String keyword, Pageable pageable) {
        return repository.findByEmailContainingIgnoreCase(keyword, pageable);
    }

    public void deleteSubscriber(Long id) {
       repository.deleteById(id);
    }
}
