import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import {POSTER_URL} from '../../data/apiConstants';
import './media-card.css';
import MediaModal from "../media-modal/MediaModal";

const MediaCard = ({data}) => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    const handleOpenModal = (media) => {
        setSelectedMedia(media);
    };

    const handleCloseModal = () => {
        setSelectedMedia(null);
    };

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
                            onClick={() => handleOpenModal(media)}
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
                    onCloseModal={handleCloseModal}
                />
            }
        </div>
    );
};

export default MediaCard;
