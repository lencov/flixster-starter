import { BaseIMDBImageURL } from "../constants";

export async function getMoviesNowPlaying(page) {
    const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`
            }
        };

    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;

    try{
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        const movieList = json.results;
        return movieList
    }catch(error){
        console.error(error.message);
    }
}

export async function getMoviesByTitle(title, page) {

    const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`
            }
        };
    
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}&include_adult=false&language=en-US&page=${page}`;

    try{
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        const movieList = json.results;
        return movieList
    }catch(error){
        console.error(error.message);
    }
}

export async function getMovieDetails(movieId) {

    const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`
            }
        };
    
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    try{
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const movie = await response.json();
        console.log(movie);
        const movieDetails = {
            movieTitle: movie.title,
            backdropPosterUrl: BaseIMDBImageURL + movie.backdrop_path,
            runtime: movie.runtime,
            overview: movie.overview,
            genres: movie.genres.map(genre => genre.name + " "),
            releaseDate: movie.release_date
        };


        return movieDetails;
    }catch(error){
        console.error(error.message);
    }
}

export async function getMovieTrailers(movieId) {

    const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`
            }
        };
    
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

    try{
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        return json;
    }catch(error){
        console.error(error.message);
    }
}



