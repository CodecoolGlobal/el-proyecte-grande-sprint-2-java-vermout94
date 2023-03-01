import React from 'react';
import Card from "react-bootstrap/Card";

const MovieCard = ({pageTitle, movies}) => {
    const posterUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    return (
        <div>
            <h3 className="text-white">{pageTitle}</h3>
            <div className={"movie-card-container"}>
                {movies && Array.isArray(movies) &&
                    movies.map((movie) => {
                        return (
                            <Card
                                key={movie.id}
                                bg="transparent"
                                border="dark"
                                text={"light"}
                                style={{width: '14rem'}}
                            >
                                <Card.Img
                                    variant="top"
                                    src={`${posterUrl}/${movie.poster_path}`}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {movie.title}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        )
                    })}
            </div>
        </div>
    );
};

export default MovieCard;