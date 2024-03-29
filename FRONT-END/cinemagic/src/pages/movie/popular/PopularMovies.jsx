/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCard from "../../../components/media-card/MediaCard";
/*apiHelpers.js*/
import {fetchHelper} from "../../../apiHelpers";
/*apiConstants.js*/
import {POPULAR_MOVIES_URL} from "../../../data/apiConstants";

export async function popularMoviesLoader() {
    return await fetchHelper(POPULAR_MOVIES_URL);
}

export default function PopularMovies() {
    const popularMovies = useLoaderData();
    return (
        <>
            <MediaCard data={popularMovies}/>
        </>
    );
};