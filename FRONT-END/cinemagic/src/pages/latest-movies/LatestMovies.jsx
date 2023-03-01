import React from 'react';
import Header from "../../components/Header";
import MediaCarousel from "../../components/dynamic/MediaCarousel"
import {fetchLatestMovies} from "./latestMoviesService";
import {useLoaderData} from "react-router-dom";

export async function latestMoviesLoader() {
    const latestMovies = await fetchLatestMovies();
    return latestMovies;
}

function LatestMovies() {
    const latestMovies = useLoaderData();
    return (
        <div>
            <Header/>
            <MediaCarousel
                title={"Latest Movies"}
                data={latestMovies}
            />
        </div>
    );
}

export default LatestMovies;