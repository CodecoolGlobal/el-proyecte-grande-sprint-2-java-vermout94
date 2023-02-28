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
public class TvController {

    private final ApiService apiService;

    public TvController(ApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("/latest-tv-shows")
    public String latestMovies(@Value("${apiLinks.latest-tv-uri}") String uri, @Value("${tmdbApi.apiKey}") String apiKey) {
        return apiService.doApiCall(uri, apiKey);
    }

    @GetMapping("/top-rated-tv-shows")
    public String topRatedMovies(@Value("${apiLinks.top-rated-tv-uri}") String uri, @Value("${tmdbApi.apiKey}") String apiKey) {
        return apiService.doApiCall(uri, apiKey);
    }

    @GetMapping("/most-popular-tv-shows")
    public String mostPopularMovies(@Value("${apiLinks.most-popular-tv-uri}") String uri, @Value("${tmdbApi.apiKey}") String apiKey) {
        return apiService.doApiCall(uri, apiKey);
    }
}