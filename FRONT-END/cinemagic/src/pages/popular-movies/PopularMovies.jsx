import React from 'react';
import {useLoaderData} from "react-router-dom";
import Header from "../../components/Header";
import MovieCards from "../../components/MovieCards";
import {fetchPopularMovies} from "./popularMoviesService";

export async function popularMoviesLoader() {
    const popularMoviesData = await fetchPopularMovies();
    return {popularMoviesData};
}
const PopularMovies = () => {
    const {popularMoviesData} = useLoaderData();
    return (
        <div>
            <Header/>
            <MovieCards data={popularMoviesData}/>
        </div>
    );
};

export default PopularMovies;