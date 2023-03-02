package com.codecool.cinemagic.data;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiConfiguration {
    @Value("${tmdbApi.apiKey}")
    private String apiKey;

    //Movie URIs
    @Value("${apiLinks.top-rated-movies-uri}")
    private String topRatedMoviesUri;

    @Value("${apiLinks.latest-movies-uri}")
    private String latestMoviesUri;

    @Value("${apiLinks.most-popular-movies-uri}")
    private String mostPopularMoviesUri;

    @Value("${apiLinks.upcoming-movies-uri}")
    private String upcomingMoviesUri;

    //TV URIs
    @Value("${apiLinks.top-rated-tv-uri}")
    private String topRatedTvUri;

    @Value("${apiLinks.latest-tv-uri}")
    private String latestTvUri;

    @Value("${apiLinks.most-popular-tv-uri}")
    private String mostPopularTvUri;


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

    @Bean
    public String getUpcomingMoviesUri(){
       return upcomingMoviesUri;
    }

   @Bean
    public String getTopRatedTvUri() {
       return topRatedTvUri;
    }

    @Bean
    public String getLatestTvUri() {
       return latestTvUri;
    }

    @Bean
    public String getMostPopularTvUri(){
       return mostPopularTvUri;
    }

}
