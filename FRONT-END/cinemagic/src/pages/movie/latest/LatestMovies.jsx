/*react*/
import React from "react";
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCard from "../../../components/media-card/MediaCard";
/*apiConstants.js*/
import {LATEST_MOVIES_URL} from "../../../data/apiConstants";
/*apiHelpers.js*/
import {fetchHelper} from "../../../apiHelpers";

export async function latestMoviesLoader() {
    return await fetchHelper(LATEST_MOVIES_URL);
}

export default function LatestMovies() {
    const latestMovies = useLoaderData();
    return (
        <>
            <MediaCard data={latestMovies}/>
        </>
    );
}
