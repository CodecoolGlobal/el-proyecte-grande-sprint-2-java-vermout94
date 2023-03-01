import React from 'react';
import Header from "../../components/Header";
import MediaFigure from "../../components/dynamic/MediaFigure";
import {fetchTopRatedMovies} from "./topRatedMoviesService";
import {useLoaderData} from "react-router-dom";


export const topRatedMoviesLoader = async () => {
    const topRatedMovies = await fetchTopRatedMovies();
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