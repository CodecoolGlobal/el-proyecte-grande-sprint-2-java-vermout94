package com.codecool.cinemagic.service;

import com.codecool.cinemagic.communication.client.ApiClient;
import com.codecool.cinemagic.configuration.tmdb.ApiContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final ApiClient apiClient;
    private final ApiContext apiContext;

    public String findLatest() {
        return apiClient.get(apiContext.movies().latest());
    }

    public String findTopRated() {
        return apiClient.get(apiContext.movies().topRated());
    }

    public String findMostPopular() {
        return apiClient.get(apiContext.movies().mostPopular();
    }
}
