import React from 'react';
import Header from "../../components/Header";
import MoviesCarousel from "../../components/MoviesCarousel"
import {fetchLatestMovies} from "./latestMoviesService";
import {useLoaderData} from "react-router-dom";
/*TODO rename carouseldata to latestMoviesData*/
export async function latestMoviesLoader() {
    const carouselData = await fetchLatestMovies();
    return  {carouselData};
}

function LatestMovies() {
    const {carouselData} = useLoaderData();
    return (
        <div>
            <Header/>
            <MoviesCarousel data={carouselData}/>
        </div>
    );
}

export default LatestMovies;