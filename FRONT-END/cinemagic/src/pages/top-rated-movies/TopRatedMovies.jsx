/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import Header from "../../components/Header";
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
            <Header/>
            <MediaFigure
                title={"Top Rated Movies"}
                data={topRatedMovies}
            />
        </div>
    );
};

export default TopRatedMovies;