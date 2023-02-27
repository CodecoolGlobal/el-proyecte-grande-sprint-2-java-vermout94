package com.codecool.cinemagic.controller;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin
@RestController
@Component
@RequestMapping("/cinemagic")
public class MovieController {

    private final String apiKey;

    public MovieController(String apiKey) {
        this.apiKey = apiKey;
    }

    @GetMapping("/latest-movies")
    public String latestMovies() {
        String uri = "https://api.themoviedb.org/3/movie/now_playing?api_key={apiKey}&language=en-US&page=1";
        return doApiCall(uri);
    }

    @GetMapping("/top-rated-movies")
    public String topRatedMovies() {
        String uri = "https://api.themoviedb.org/3/movie/top_rated?api_key={apiKey}&language=en-US&page=1&region=DE";
        return doApiCall(uri);
    }


    @GetMapping("/most-popular-movies")
    public String mostPopularMovies() {
        String uri = "https://api.themoviedb.org/3/movie/popular?api_key={apiKey}&language=en-US&page=1&region=DE"; //TODO: in application.yml and use bean
        return doApiCall(uri);
    }

    //TODO: add fetch data from react and post it to the backend, really needed?
    /*@GetMapping("/movie/{movie_Id}"){
        RestTemplate restTemplate = new RestTemplate();
        String uri = "https://api.themoviedb.org/3/movie/{movie_id}?api_key={apiKey}&language=en-US";
        return restTemplate.getForObject(uri, String.class, apiKey, movie_Id);
    }*/

    public String doApiCall(String uri) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(uri, String.class, apiKey); //TODO: use webclient instead of resttemplate, dont create it everytime, use bean ionjection
    }

    //TODO: also add TV shows
}