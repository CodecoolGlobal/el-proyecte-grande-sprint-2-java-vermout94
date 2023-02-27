import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import "./MovieCarousel.css"


function MoviesCarousel(props) {

    const { data } = props;
    const posterUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const backgroundUrl = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

    return (
        <div className ='movie-carousel-container'>
            <h2 style={{color: "white"}}>Featured movies</h2>
            <Carousel>
                {
                    data && data.map(movie =>{
                        return(
                            <Paper key={movie.id}>
                                <div className = 'movie-card-container'>
                                    <div className="movie-card">
                                        <img src={`${backgroundUrl}${movie.backdrop_path}`} alt="" />
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <a href={"/" + movie.title}>
                                                    <img src={`${posterUrl}${movie.poster_path}`} alt="" />
                                                </a>
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default MoviesCarousel