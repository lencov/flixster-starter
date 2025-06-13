import './MovieList.css';
import { useState } from 'react';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';
import { isWatched, isFavorited } from './utils';

function MovieList({movies, favoriteMap, watchedMap, setFavoriteMap, setWatchedMap}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal = (movieId) => {
        setIsModalOpen(true);
        setSelectedMovieId(movieId);
    }

    const handleFavoriteToggle = (movieId, title) => {
        setFavoriteMap((prevMap) => {
            const newMap = new Map(prevMap);
            newMap.set(movieId, [!isFavorited(movieId, newMap), title]);
            return newMap;
        });
    };
    const handleWatchedToggle = (movieId, title) => {
        setWatchedMap((prevMap) => {
            const newMap = new Map(prevMap);
            newMap.set(movieId, [!isWatched(movieId, newMap), title]);
            return newMap;
        });
    };

    // console.log('movies being displayed', movies);

    return(
        <div className='MovieList'>
            {
                movies.map(movie => (
                    <MovieCard 
                        onClick={() => openModal(movie.id)}
                        key={movie.id}
                        backdrop_path={movie.backdrop_path}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        vote_average={movie.vote_average}
                        isFavorited={isFavorited(movie.id, favoriteMap)}
                        isWatched={isWatched(movie.id, watchedMap)}
                        onFavoriteToggle={() => handleFavoriteToggle(movie.id, movie.title)}
                        onWatchedToggle={() => handleWatchedToggle(movie.id, movie.title)}
                    />
                ))
            }
            {isModalOpen && (
                <MovieModal movieId={selectedMovieId} onClose={closeModal}/>
            )} 
        </div>
    )
}

export default MovieList;