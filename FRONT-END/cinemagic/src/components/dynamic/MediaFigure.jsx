/*react*/
import React from 'react';
/*bootstrap*/
import {Figure} from "react-bootstrap";
/*apiConstants.js*/
import {POSTER_URL} from "../../data/apiConstants";
import {BACKDROP_URL} from "../../data/apiConstants";

const MediaFigure = ({data}) => {
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
                            backgroundImage: `url(${BACKDROP_URL}/${media.poster_path})`,
                            filter: 'brightness(25%)',
                            zIndex: -1, // set z-index to -1 to position behind Figure
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        };
                        return (
                            <Figure key={media.id} style={figureStyle}>
                                <div style={figureBackgroundStyle}></div>
                                <Figure.Image src={`${POSTER_URL}/${media.poster_path}`}/>
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

