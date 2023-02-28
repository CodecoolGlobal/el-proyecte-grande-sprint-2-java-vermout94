import React from 'react';
import Header from "../../components/Header";
import MoviesCarousel from "../../components/MoviesCarousel"
import {fetchLatestMovies} from "./homeService";
import {useLoaderData} from "react-router-dom";

export async function homeLoader() {
    const carouselData = await fetchLatestMovies();
    return  {carouselData};
}

function Home() {
    const {carouselData} = useLoaderData();
    return (
        <div className='movie-carousel-container'>
            <Header/>
            <MoviesCarousel data={carouselData}/>
        </div>
    );
}

export default Home;