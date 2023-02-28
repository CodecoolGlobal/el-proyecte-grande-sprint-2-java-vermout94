import React from 'react';
import Header from "../../components/Header";
import TopRatedMoviesFigure from "../../components/TopRatedMoviesFigure";
import {fetchTopRatedMovies} from "./topRatedMoviesService";
import {useLoaderData} from "react-router-dom";


export const topRatedMoviesLoader = async () => {
    const topRatedMovies = await fetchTopRatedMovies();
    return {topRatedMovies};
}
const TopRatedMovies = () => {
    const {topRatedMovies} = useLoaderData();
    return (
        <div>
            <Header/>
            <TopRatedMoviesFigure data={topRatedMovies}/>
        </div>
    );
};

export default TopRatedMovies;