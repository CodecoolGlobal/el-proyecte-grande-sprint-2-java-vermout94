import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import "./Home.css"


function Home(props) {

    const { data } = props;
    const posterUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const backgroundUrl = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";
    return (
/*        <div>
            <h2>Latest Movies</h2>
            <ul>
                {data && data.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </li>
                ))}
            </ul>
        </div>*/

        <div className ='movie-carousel-container'>
            <Carousel>
                {
                    data && data.map(movie =>{
                        return(
                            <Paper key={movie.id}>
                                <div className = 'movie-card-container'>
                                    {/*<div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>*/}
                                    <div className="movie-card">
                                        <img src={`${backgroundUrl}${movie.backdrop_path}`} alt="" />
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={`${posterUrl}${movie.poster_path}`} alt="" />
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
export default Home