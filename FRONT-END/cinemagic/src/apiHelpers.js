import {BACKEND_URL} from "./data/apiConstants";

export const fetchHelper = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

export async function saveFavoriteMovie(userId, movieId) {
    const response = await fetch(`${BACKEND_URL}/api/authentication/${userId}/favorite-movies/${movieId}`, {
        method: "POST",
    });

    if (!response.ok) {
        throw new Error("Failed to save favorite movie.");
    }
}
