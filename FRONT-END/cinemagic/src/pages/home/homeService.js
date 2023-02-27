export const fetchLatestMovies = async () => {
    const response = await fetch("http://localhost:8080/cinemagic/latest-movies");
    const data = await response.json();
    return data.results;
}