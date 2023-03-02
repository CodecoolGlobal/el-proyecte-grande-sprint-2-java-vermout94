/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCarousel from "../../components/dynamic/MediaCarousel"
/*helpers.js*/
import {fetchHelper} from "../../helpers"


export async function latestMoviesLoader() {
    const latestMovies = await fetchHelper("http://localhost:8080/cinemagic/latest-movies");
    return latestMovies;
}

function LatestMovies() {
    const latestMovies = useLoaderData();
    return (
        <div>
            <MediaCarousel
                data={latestMovies}
            />
        </div>
    );
}

export default LatestMovies;