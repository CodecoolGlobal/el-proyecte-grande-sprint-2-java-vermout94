import React from 'react';
import {Figure} from "react-bootstrap";

const TopRatedMoviesFigure = (props) => {
    const {data} = props;
    /*TODO find a way to save this URL and the Backdrop URL somewhere*/
    const posterUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";

    return (
        <div>
            <h3 className="text-white">Top Rated Movies</h3>
            <div className="movie-figure-container">
                {data &&
                    Array.isArray(data) &&
                    data.map((movie) => {
                        return (
                            <Figure key={movie.id}>
                                <Figure.Image src={`${posterUrl}/${movie.poster_path}`} />
                                <Figure.Caption>
                                    <p><b>{movie.title}</b></p>
                                    <p>Rating: {movie.vote_average}</p>
                                    <p>Release Date: {movie.release_date}</p>
                                    <p>Overview:
                                        <br></br>
                                        {movie.overview}</p>
                                </Figure.Caption>
                            </Figure>
                        );
                    })}
            </div>
        </div>
    );
};

export default TopRatedMoviesFigure;



