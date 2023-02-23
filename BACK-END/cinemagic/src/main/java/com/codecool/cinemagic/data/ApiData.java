package com.codecool.cinemagic.data;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiData {
    @Value("${tmdbApi.apiKey}")
    private String apiKey;

   @Bean
    public String getApiKey() {
        return apiKey;
    }
}
