package com.codecool.cinemagic.communication.endpoint;

import com.codecool.cinemagic.communication.client.ApiClient;
import com.codecool.cinemagic.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("cinemagic/movies")
@CrossOrigin
@RequiredArgsConstructor
public class MovieEndpoint {
    private final MovieService movieService;

    @GetMapping("latest")
    public String latestMovies() {
        return movieService.findLatest();
    }

    @GetMapping("top-rated")
    public String topRatedMovies() {
        return movieService.findTopRated();
    }

    @GetMapping("most-popular")
    public String mostPopularMovies() {
        return movieService.findMostPopular();
    }
}