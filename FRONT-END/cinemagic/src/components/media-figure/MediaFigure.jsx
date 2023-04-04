/*react*/
import React, {useState} from 'react';
/*bootstrap*/
import {Figure} from "react-bootstrap";
/*apiConstants.js*/
import {BACKDROP_URL, POSTER_URL} from "../../data/apiConstants";
/*css*/
import "./media-figure.css"
/*Components*/
import MediaModal from "../media-modal/MediaModal";
/*service*/
import {handleCloseModal, handleOpenModal} from "../../service";

const MediaFigure = ({data}) => {
    const [selectedMedia, setSelectedMedia] = useState(null);

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
                            <Figure
                                key={media.id} style={figureStyle}
                                onClick={() => handleOpenModal(setSelectedMedia, media)}
                            >
                                <div style={figureBackgroundStyle}></div>
                                <Figure.Image src={`${POSTER_URL}/${media.poster_path}`}/>
                                <Figure.Caption>
                                    <h4>
                                        {media.title ? media.title : media.name}
                                    </h4>
                                    <br></br>
                                    <p>
                                        {media.release_date > new Date().toISOString().split('T')[0] ? "" : `Rating: ${media.vote_average}`}
                                    </p>
                                    <p>
                                        Release Date: {media.release_date ? media.release_date : media.first_air_date}
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
                {
                    selectedMedia &&
                    <MediaModal
                        selectedMedia={selectedMedia}
                        onCloseModal={() => handleCloseModal(setSelectedMedia)}
                    />
                }
            </div>
        </div>
    );
}
export default MediaFigure;

