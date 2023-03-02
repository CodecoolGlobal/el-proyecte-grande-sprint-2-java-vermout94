/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaFigure from "../../components/dynamic/MediaFigure";
/*helpers.js*/
import {fetchHelper} from "../../helpers";


export const topRatedMoviesLoader = async () => {
    const topRatedMovies = await fetchHelper("http://localhost:8080/cinemagic/top-rated-movies");
    return topRatedMovies;
}
const TopRatedMovies = () => {
    const topRatedMovies = useLoaderData();
    return (
        <div>
            <MediaFigure
                data={topRatedMovies}
            />
        </div>
    );
};

export default TopRatedMovies;