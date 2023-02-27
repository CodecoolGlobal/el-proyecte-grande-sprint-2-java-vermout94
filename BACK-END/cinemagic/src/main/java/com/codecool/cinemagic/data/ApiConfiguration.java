package com.codecool.cinemagic.data;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiConfiguration {
    @Value("${tmdbApi.apiKey}")
    private String apiKey;

    @Value("${apiLinks.top-rated-movies-uri}")
    private String topRatedMoviesUri;

    @Value("${apiLinks.latest-movies-uri}")
    private String latestMoviesUri;

    @Value("${apiLinks.most-popular-movies-uri}")
    private String mostPopularMoviesUri;

   @Bean
    public String getApiKey() {
        return apiKey;
    }

    @Bean
    public String getTopRatedMoviesUri() {
       return topRatedMoviesUri;
    }

    @Bean
    public String getLatestMoviesUri() {
       return latestMoviesUri;
    }

    @Bean
    public String getMostPopularMoviesUri(){
       return mostPopularMoviesUri;
    }
}
