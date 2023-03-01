import React from 'react';
import {useLoaderData} from "react-router-dom";
import Header from "../../components/Header";
import {fetchPopularMovies} from "./popularMoviesService";
import MediaCard from "../../components/dynamic/MediaCard";

export async function popularMoviesLoader() {
    const popularMovies = await fetchPopularMovies();
    return popularMovies;
}
const PopularMovies = () => {
    const popularMovies = useLoaderData();
    return (
        <div>
            <Header/>
            <MediaCard
                title={"Popular Movies"}
                data={popularMovies}
            />
        </div>
    );
};

export default PopularMovies;