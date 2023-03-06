/*localhost*/
export const BACKEND_URL = "http://localhost:8080";
/*movies*/
/*TODO Change URLS to backend/cinemagic/movies/latest or cinemagic/movies/popular or cinemagic/movies/toprated*/
export const LATEST_MOVIES_URL = `${BACKEND_URL}/cinemagic/movies/latest`;
export const POPULAR_MOVIES_URL = `${BACKEND_URL}/cinemagic/movies/most-popular`;
export const TOP_RATED_MOVIES_URL = `${BACKEND_URL}/cinemagic/movies/top-rated`;
/* External APIs */
export const POSTER_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
export const BACKDROP_URL = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";