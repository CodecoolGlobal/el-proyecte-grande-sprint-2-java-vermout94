/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaFigure from "../../components/dynamic/MediaFigure";
/*helpers.js*/
import {fetchHelper} from "../../helpers";
/*apiConstants.js*/
import {TOP_RATED_MOVIES_URL} from "../../data/apiConstants";


export const topRatedMoviesLoader = async () => {
    return await fetchHelper(TOP_RATED_MOVIES_URL);
}
const TopRatedMovies = () => {
    const topRatedMovies = useLoaderData();
    return (
        <>
            <MediaFigure data={topRatedMovies}/>
        </>
    );
};

export default TopRatedMovies;