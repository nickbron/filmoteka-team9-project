import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const KEY = '?api_key=130ddbced0917ef5d6e094c730cee47c';
const QUERY = '&language=en&language=ru&include_adult=false';


async function fetchGenres() {
    const responce = await axios.get(`/3/genre/movie/list${KEY}&language=en&language=ru`);;
    return responce.data;
}


async function fetchTopMovies(page) {
    const response = await axios.get(`/3/trending/movie/day${KEY}&language=en&language=ru&page=${page}`);
    return response.data;
}



async function fetchMoviesByQuery(movie, page) {
    const responce = await axios.get(`/3/search/movie${KEY}${QUERY}&query=${movie}&page=${page}`);
    return responce.data;
}


async function fetchMovieById(movieId) {
    const response = await axios.get(`/3/movie/${movieId}${KEY}&language=en&language=ru`);
    return response.data;
}


export {fetchGenres, fetchTopMovies, fetchMoviesByQuery, fetchMovieById}