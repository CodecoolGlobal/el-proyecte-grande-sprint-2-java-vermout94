/*localhost*/
export const BACKEND_URL = "http://localhost:8080";
/*movies*/
/*TODO Change URLS to backend/cinemagic/movies/latest or cinemagic/movies/popular or cinemagic/movies/toprated*/
export const LATEST_MOVIES_URL = `${BACKEND_URL}/cinemagic/latest-movies`;
export const POPULAR_MOVIES_URL = `${BACKEND_URL}/cinemagic/popular-movies`;
export const TOP_RATED_MOVIES_URL = `${BACKEND_URL}/cinemagic/top-rated-movies`;
/* External APIs */
export const POSTER_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
export const BACKDROP_URL = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";