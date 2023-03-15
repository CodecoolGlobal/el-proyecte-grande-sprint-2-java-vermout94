import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {POSTER_URL} from '../../data/apiConstants';
import './media-card.css';

const MediaCard = ({data}) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);

    const handleOpenModal = (media) => {
        setSelectedMedia(media);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMedia(null);
    };

    const handleSetAsFavorite = () => {
        // TODO: handle setting selectedMedia as favorite
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
            {selectedMedia &&
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedMedia.title ? selectedMedia.title : selectedMedia.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={`${POSTER_URL}/${selectedMedia.poster_path}`} alt={selectedMedia.title}/>
                        <p>{selectedMedia.overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSetAsFavorite}>
                            Set as Favorite
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </div>
    );
};

export default MediaCard;
