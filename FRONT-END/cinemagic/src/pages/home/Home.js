import React from 'react';
import "./Home.css"
import Header from "../../components/header/Header";
import MoviesCarousel from "../../components/movies-carousel/MoviesCarousel"


function Home() {

    return (
        <div className ='movie-carousel-container'>
            <Header/>
            <MoviesCarousel/>
        </div>
    );
}
export default Home