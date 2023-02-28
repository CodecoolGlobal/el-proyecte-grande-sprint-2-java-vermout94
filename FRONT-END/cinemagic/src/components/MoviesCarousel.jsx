import React from 'react';
import { Carousel } from 'react-bootstrap';

function MoviesCarousel(props) {
    const { data } = props;
    const posterUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const backgroundUrl = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

    return (
        <div>
            <h2 className="text-white">Latest movies</h2>

            <Carousel indicators={false} nextLabel={""} prevLabel={""}>
                {data &&
                    data.map((movie) => {
                        return (
                            <Carousel.Item key={movie.id}>
                                <img
                                    className={"movie-backdrop"}
                                    src={`${backgroundUrl}${movie.backdrop_path}`}
                                    alt={movie.title}
                                />
                                <Carousel.Caption>
                                    <img
                                        className={"movie-poster"}
                                        src={`${posterUrl}${movie.poster_path}`}
                                        alt={`${movie.title} poster`}
                                    />
                                    <h3 className={"movie-title"}>{movie.title}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
            </Carousel>
        </div>
    );
}

export default MoviesCarousel;