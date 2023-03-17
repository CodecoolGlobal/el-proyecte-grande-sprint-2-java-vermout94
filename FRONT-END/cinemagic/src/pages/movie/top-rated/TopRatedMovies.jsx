/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaFigure from "../../../components/media-figure/MediaFigure";
/*apiHelpers.js*/
import {fetchHelper} from "../../../apiHelpers";
/*apiConstants.js*/
import {TOP_RATED_MOVIES_URL} from "../../../data/apiConstants";


export async function topRatedMoviesLoader() {
    return await fetchHelper(TOP_RATED_MOVIES_URL);
}

export default function TopRatedMovies() {
    const topRatedMovies = useLoaderData();
    return (
        <>
            <MediaFigure data={topRatedMovies}/>
        </>
    );
};
