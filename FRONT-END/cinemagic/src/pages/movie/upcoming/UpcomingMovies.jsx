/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaFigure from "../../../components/media-figure/MediaFigure";
/*apiHelpers.js*/
import {fetchHelper} from "../../../apiHelpers";
/*apiConstants.js*/
import {UPCOMING_MOVIES_URL} from "../../../data/apiConstants";


export async function upcomingMoviesLoader() {
    return await fetchHelper(UPCOMING_MOVIES_URL);
}

export default function UpcomingMovies() {
    const upcomingMovies = useLoaderData();
    return (
        <>
            <MediaFigure data={upcomingMovies}/>
        </>
    );
};