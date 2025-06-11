import './MovieList.css';
import { useState, useEffect } from 'react';
import { getMoviesNowPlaying } from './movieService';
import MovieCard from './MovieCard';

function MovieList({page}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getData(){
            const movieResults = await getMoviesNowPlaying(page);
            setMovies(movieResults);
        }
        getData();
    }, []);

    return(
        <div className='MovieList'>
 
            {
            movies.map(movie => (
                <MovieCard id={movie.id} backdrop_path={movie.backdrop_path} poster_path={movie.poster_path} title={movie.title} vote_average={movie.vote_average} />
            ))
            }

                    
        </div>
    )
}

export default MovieList;