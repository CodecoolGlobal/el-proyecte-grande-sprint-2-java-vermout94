/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaFigure from "../../../components/dynamic/MediaFigure";
/*helpers.js*/
import {fetchHelper} from "../../../helpers";
/*apiConstants.js*/
import {UPCOMING_MOVIES_URL} from "../../../data/apiConstants";


export const upcomingMoviesLoader = async () => {
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