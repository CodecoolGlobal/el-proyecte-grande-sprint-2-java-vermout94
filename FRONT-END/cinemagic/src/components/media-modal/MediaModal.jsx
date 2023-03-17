import Modal from "react-bootstrap/Modal";
import {POSTER_URL} from "../../data/apiConstants";
import Button from "react-bootstrap/Button";
import React, {useState} from 'react';
import "../header/header.css"

const MediaModal = ({selectedMedia, onCloseModal}) => {
    const [showModal, setShowModal] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
        onCloseModal();
    };

    const handleSetAsFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div>
            <Modal centered show={showModal} onHide={handleCloseModal}>
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
                    <Button variant="info" onClick={handleSetAsFavorite}>
                        {isFavorite ? "Remove from Favorites" : "Set as Favorite"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MediaModal;