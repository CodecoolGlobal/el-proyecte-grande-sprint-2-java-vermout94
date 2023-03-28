import Modal from "react-bootstrap/Modal";
import {POSTER_URL} from "../../data/apiConstants";
import Button from "react-bootstrap/Button";
import React, {useState} from 'react';
import "../header/header.css"
import {saveFavoriteMovie} from "../../apiHelpers";

const MediaModal = ({selectedMedia, onCloseModal}) => {
    const [showModal, setShowModal] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    /*TODO find a solution for the user ID*/
    const userId = 1;
    
    const handleCloseModal = () => {
        setShowModal(false);
        onCloseModal();
    };

    const handleSetAsFavorite = async () => {
        try {
            await saveFavoriteMovie(userId, selectedMedia.id);
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error("Error saving favorite movie:", error);
        }
    };


    return (
        <div>
            <Modal centered show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>{selectedMedia.title ? selectedMedia.title : selectedMedia.name}</Modal.Title>
                    <Button variant="link" className="close" onClick={handleCloseModal}>
                        <span aria-hidden="true">&times;</span>
                    </Button>
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