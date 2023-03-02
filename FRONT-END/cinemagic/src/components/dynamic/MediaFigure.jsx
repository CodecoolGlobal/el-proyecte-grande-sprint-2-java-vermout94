/*react*/
import React from 'react';
/*bootstrap*/
import {Figure} from "react-bootstrap";

const MediaFigure = ({ data }) => {
    /*TODO ask EL how to save those urls in a better way*/
    const posterUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const backgroundUrl = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

    return (
        <div>
            <div className="media-figure-container">
                {data && Array.isArray(data) &&
                    data.map((media) => {
                        const figureStyle = {
                            position: 'relative', // add relative positioning to parent
                        };
                        const figureBackgroundStyle = {
                            content: '',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${backgroundUrl}/${media.poster_path})`,
                            filter: 'brightness(25%)',
                            zIndex: -1, // set z-index to -1 to position behind Figure
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        };
                        return (
                            <Figure key={media.id} style={figureStyle}>
                                <div style={figureBackgroundStyle}></div>
                                <Figure.Image src={`${posterUrl}/${media.poster_path}`} />
                                <Figure.Caption>
                                    <h4>
                                        {media.title}
                                    </h4>
                                    <br></br>
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
}
export default MediaFigure;

