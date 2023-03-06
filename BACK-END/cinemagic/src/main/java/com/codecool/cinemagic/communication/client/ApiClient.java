package com.codecool.cinemagic.communication.client;

import lombok.RequiredArgsConstructor;
import com.codecool.cinemagic.configuration.tmdb.ApiContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.reactive.function.client.WebClient;

@Controller
@RequiredArgsConstructor
public class ApiClient {
    private final WebClient webClient;
    private final ApiContext apiContext;

    public String get(String uri) {
        return webClient.get()
                .uri(uri, apiContext.key())
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
