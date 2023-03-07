package com.codecool.cinemagic.communication.endpoint;

import lombok.RequiredArgsConstructor;
import com.codecool.cinemagic.service.TvService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tv")
@CrossOrigin
@RequiredArgsConstructor
public class TvEndpoint {

    private final TvService tvService;

    @GetMapping("latest")
    public String latestMovies() {
        return tvService.findLatest();
    }

    @GetMapping("/most-popular")
    public String mostPopularMovies() {
        return tvService.findMostPopular();
    }

    @GetMapping("top-rated")
    public String topRatedMovies() {
        return tvService.findTopRated();
    }
}