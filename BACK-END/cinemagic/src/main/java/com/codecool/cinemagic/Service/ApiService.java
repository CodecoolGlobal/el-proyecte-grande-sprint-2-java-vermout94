package com.codecool.cinemagic.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class ApiService {

    private final WebClient webClient;

    public ApiService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }

    public String doApiCall(String uri, String apiKey) {
        return webClient.get()
                .uri(uri, apiKey)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
