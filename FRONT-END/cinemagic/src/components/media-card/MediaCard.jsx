/*react*/
import React, {useState} from 'react';
/*react bootstrap*/
import Card from 'react-bootstrap/Card';
/*apiConstants*/
import {POSTER_URL} from '../../data/apiConstants';
/*css*/
import './media-card.css';
/*MediaModal*/
import MediaModal from "../media-modal/MediaModal";
/*service*/
import {handleCloseModal, handleOpenModal} from "../../service";

const MediaCard = ({data}) => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    return (
        <div>
            <div className="media-card-container">
                {data && Array.isArray(data) &&
                    data.map((media) => (
                        <Card
                            key={media.id}
                            bg="transparent"
                            border="dark"
                            text="light"
                            style={{width: '14rem'}}
                            onClick={() => handleOpenModal(setSelectedMedia, media)}
                        >
                            <Card.Img
                                variant="top"
                                src={`${POSTER_URL}/${media.poster_path}`}
                            />
                            <Card.Body>
                                <Card.Title>
                                    {media.title ? media.title : media.name}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
            </div>
            {
                selectedMedia &&
                <MediaModal
                    selectedMedia={selectedMedia}
                    onCloseModal={() => handleCloseModal(setSelectedMedia)}
                />
            }
        </div>
    );
};

export default MediaCard;
