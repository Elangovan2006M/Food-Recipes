package com.example.foody.controller;

import com.example.foody.model.Subscribe;
import com.example.foody.service.SubscribeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/subscribe")
public class SubscribeController {

    @Autowired
    private SubscribeService subscribeService;

    // POST /api/subscribe
    @PostMapping
    public Subscribe subscribe(@RequestParam String email) {
        return subscribeService.saveEmail(email);
    }
    
    // GET /api/subscribe/all?page=0&size=10 
    @GetMapping("/all")
    public Page<Subscribe> getAllSubscribers(Pageable pageable) {
        return subscribeService.getAllSubscribers(pageable);
    }

    // GET /api/subscribe/search?keyword=abc&page=0&size=10
    @GetMapping("/search")
    public Page<Subscribe> searchSubscribers(@RequestParam String keyword, Pageable pageable) {
        return subscribeService.searchByEmail(keyword, pageable);
    }
    @GetMapping("/count")
    public long countAllSubscribers() {
        return subscribeService.countAllSubscriber();
    }

    @DeleteMapping("/{id}")
    public void deleteSubscriber(@PathVariable Long id) {
        subscribeService.deleteSubscriber(id);
    }
}
