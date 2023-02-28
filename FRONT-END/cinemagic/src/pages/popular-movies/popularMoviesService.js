export const fetchPopularMovies = async () => {
    const response = await fetch("http://localhost:8080/cinemagic/most-popular-movies");
    const data = await response.json();
    return data.results;
}