import {BACKEND_URL} from "./data/apiConstants";

export const fetchHelper = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

export async function saveFavoriteMovie(email, movieId) {
    const response = await fetch(`${BACKEND_URL}/api/authentication/${email}/favorite-movies/${movieId}`, {
        method: "POST",
    });

    if (!response.ok) {
        throw new Error("Failed to save favorite movie.");
    }
}

export const handleOpenModal = (setSelectedMedia, media) => {
    setSelectedMedia(media);
};

export const handleCloseModal = (setSelectedMedia) => {
    setSelectedMedia(null);
};

