/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import Header from "../../components/Header";
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
            <Header/>
            <MediaCarousel
                title={"Latest Movies"}
                data={latestMovies}
            />
        </div>
    );
}

export default LatestMovies;