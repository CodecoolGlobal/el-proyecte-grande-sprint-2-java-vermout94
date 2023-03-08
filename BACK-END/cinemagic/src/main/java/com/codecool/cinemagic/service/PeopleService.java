package com.codecool.cinemagic.service;

import com.codecool.cinemagic.communication.client.ApiClient;
import com.codecool.cinemagic.configuration.tmdb.ApiContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PeopleService {
    private final ApiClient apiClient;
    private final ApiContext apiContext;
    public String findMostPopular() { return apiClient.get(apiContext.people().mostPopular()); }
}
