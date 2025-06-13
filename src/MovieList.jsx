import './MovieList.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

function MovieList({movies}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal = (movieId) => {
        setIsModalOpen(true);
        setSelectedMovieId(movieId);
    }

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