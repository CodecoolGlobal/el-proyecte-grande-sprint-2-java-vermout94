package com.codecool.cinemagic.communication.endpoint;

import lombok.RequiredArgsConstructor;
import com.codecool.cinemagic.service.MovieService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies")
@CrossOrigin
@RequiredArgsConstructor
public class MovieEndpoint {
    private final MovieService movieService;

    @GetMapping("latest")
    public String latestMovies() {
        return movieService.findLatest();
    }

    @GetMapping("most-popular")
    public String mostPopularMovies() {
        return movieService.findMostPopular();
    }

    @GetMapping("top-rated")
    public String topRatedMovies() {
        return movieService.findTopRated();
    }
}