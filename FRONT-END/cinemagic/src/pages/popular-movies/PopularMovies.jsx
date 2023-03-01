/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCard from "../../components/dynamic/MediaCard";
/*helpers.js*/
import {fetchHelper} from "../../helpers";


export async function popularMoviesLoader() {
    const popularMovies = await fetchHelper("http://localhost:8080/cinemagic/most-popular-movies");
    return popularMovies;
}
const PopularMovies = () => {
    const popularMovies = useLoaderData();
    return (
        <div>
            <MediaCard
                data={popularMovies}
            />
        </div>
    );
};

export default PopularMovies;