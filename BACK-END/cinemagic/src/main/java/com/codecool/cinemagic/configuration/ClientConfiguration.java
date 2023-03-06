package com.codecool.cinemagic.configuration;

import com.codecool.cinemagic.configuration.tmdb.ApiContext;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
@ConfigurationProperties("api")
@Setter
public class ClientConfiguration {
    private ApiContext apiContext;

    @Bean
    WebClient webClient(WebClient.Builder webClientBuilder) {
        return webClientBuilder.build();
    }

    @Bean
    ApiContext apiContext() {
        return apiContext;
    }
}
