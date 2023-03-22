package com.codecool.cinemagic.communication.endpoint;

import com.codecool.cinemagic.service.TvService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("tv")
@RequiredArgsConstructor
public class TvEndpoint {

    private final TvService tvService;

    @GetMapping("most-popular")
    public String mostPopularTv() {
        return tvService.findMostPopular();
    }

    @GetMapping("top-rated")
    public String topRatedTv() {
        return tvService.findTopRated();
    }
}