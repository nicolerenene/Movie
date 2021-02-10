package com.aim.java.movie.entity.ratings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/ratings")
public class RatingController {
    @Autowired
    private RatingRepository ratingRepository;

    @GetMapping(path = "")
    public Iterable<Rating> getAllRating() {
        return ratingRepository.findAll();
    }
}
