import React from 'react';
import { Carousel } from 'react-bootstrap';

function MoviesCarousel(props) {
    const { data } = props;
    const posterUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const backgroundUrl = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

    return (
        <div>
            <h2 style={{ color: "white" }}>Latest movies</h2>

            <Carousel>
                {data &&
                    data.map((movie) => {
                        return (
                            <Carousel.Item key={movie.id}>
                                <div
                                    style={{
                                        position: "relative",
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                <img
                                    className="d-block w-100"
                                    src={`${backgroundUrl}${movie.backdrop_path}`}
                                    alt={movie.title}
                                />
                                <Carousel.Caption>
                                    <img
                                        src={`${posterUrl}${movie.poster_path}`}
                                        alt={`${movie.title} poster`}
                                        style={{ maxWidth: "400px", border: "solid yellow 4px", borderRadius: "10px", }}
                                    />
                                    <h3>{movie.title}</h3>
                                </Carousel.Caption>
                                </div>
                            </Carousel.Item>
                        );
                    })}
            </Carousel>
        </div>
    );
}

export default MoviesCarousel;