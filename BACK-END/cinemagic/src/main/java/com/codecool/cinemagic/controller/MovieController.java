package com.codecool.cinemagic.controller;

import com.codecool.cinemagic.Service.ApiService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@Component
@RequestMapping("/cinemagic")
public class MovieController {

    private final ApiService apiService;

    public MovieController(ApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("/latest-movies")
    public String latestMovies(@Value("${apiLinks.latest-movies-uri}") String uri, @Value("${tmdbApi.apiKey}") String apiKey) {
        return apiService.doApiCall(uri, apiKey);
    }

    @GetMapping("/top-rated-movies")
    public String topRatedMovies(@Value("${apiLinks.top-rated-movies-uri}") String uri, @Value("${tmdbApi.apiKey}") String apiKey) {
        return apiService.doApiCall(uri, apiKey);
    }

    @GetMapping("/most-popular-movies")
    public String mostPopularMovies(@Value("${apiLinks.most-popular-movies-uri}") String uri, @Value("${tmdbApi.apiKey}") String apiKey) {
        return apiService.doApiCall(uri, apiKey);
    }
}