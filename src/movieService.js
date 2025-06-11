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

export async function getMovieByTitle(title, page) {

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
        const movieList = json.data.results;
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
        const json = await response.json();
        console.log(json);
        const movieDetails = json.data;
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
        const videos = json.data.results;
        return videos;
    }catch(error){
        console.error(error.message);
    }
}



