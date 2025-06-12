import './MovieList.css';
import { useEffect } from 'react';
import MovieCard from './MovieCard';

function MovieList({movies, sortOption}) {

    useEffect(() => {
        //sort movies based on sortOption
    }, []);

    return(
        <div className='MovieList'>
            {
            movies.map(movie => (
                <MovieCard key={movie.id} backdrop_path={movie.backdrop_path} poster_path={movie.poster_path} title={movie.title} vote_average={movie.vote_average} />
            ))
            }                
        </div>
    )
}

export default MovieList;