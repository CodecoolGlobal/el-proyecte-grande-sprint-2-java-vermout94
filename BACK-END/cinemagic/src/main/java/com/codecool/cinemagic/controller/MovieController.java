package com.codecool.cinemagic.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@CrossOrigin
@RestController
@RequestMapping("/cinemagic")
public class MovieController {

        @GetMapping("/latest-movies")
        public String index() {
            RestTemplate restTemplate = new RestTemplate();
            String api_key = "6c04a613f1bf8ff8766981ccebbb11df";
            String uri = "https://api.themoviedb.org/3/movie/now_playing?api_key={api_key}&language=en-US&page=1";
            String response = restTemplate.getForObject(uri, String.class, api_key);
            return response;
        }
    }
