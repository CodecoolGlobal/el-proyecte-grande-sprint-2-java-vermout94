/*react*/
import React from 'react';
/*bootstrap*/
import {Figure} from "react-bootstrap";

const MediaFigure = ({data}) => {
    /*TODO find a way to save this URL and the Backdrop URL somewhere (Also do this in LatestMovies and PopularMovies*/
    const posterUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";

    return (
        <div>
            <div className="media-figure-container">
                {data && Array.isArray(data) &&
                    data.map((media) => {
                        return (
                            <Figure key={media.id}>
                                <Figure.Image src={`${posterUrl}/${media.poster_path}`} />
                                <Figure.Caption>
                                    <p>
                                        <b>{media.title}</b>
                                    </p>
                                    <p>
                                        Rating: {media.vote_average}
                                    </p>
                                    <p>
                                        Release Date: {media.release_date}
                                    </p>
                                    <p>
                                        Overview:
                                        <br></br>
                                        {media.overview}
                                    </p>
                                </Figure.Caption>
                            </Figure>
                        );
                    })}
            </div>
        </div>
    );
};

export default MediaFigure;
