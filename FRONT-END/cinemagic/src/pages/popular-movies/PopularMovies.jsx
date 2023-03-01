import React from 'react';
import {useLoaderData} from "react-router-dom";
import Header from "../../components/Header";
import {fetchPopularMovies} from "./popularMoviesService";
import MovieCard from "../../components/MovieCard";

export async function popularMoviesLoader() {
    const popularMovies = await fetchPopularMovies();
    return popularMovies;
}
const PopularMovies = () => {
    const popularMovies = useLoaderData();
    return (
        <div>
            <Header/>
            <MovieCard
                pageTitle={"Popular Movies"}
                movies={popularMovies}
            />
        </div>
    );
};

export default PopularMovies;