/*TODO create one fetch function to use in every service class*/
export const fetchTopRatedMovies = async () => {
    const response = await fetch("http://localhost:8080/cinemagic/top-rated-movies");
    const data = await response.json();
    return data.results;
}