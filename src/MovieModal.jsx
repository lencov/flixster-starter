import './MovieModal.css';
import { useState, useEffect } from 'react'
import { getMovieDetails } from './movieService';

function MovieModal({movieId, onClose}) {
    const [movieDetails, setMovieDetails] = useState(null)

    useEffect(() => {
        const fetchMovieDetails = async () => {
            console.log('movieId: ', movieId)
            let movie = await getMovieDetails(movieId);
            setMovieDetails(movie);
        };
        fetchMovieDetails();
    }, [movieId]);

    return (
        <div id="movieModal" className="modal-overlay">
            {console.log("modal is being rendered")}
            {movieDetails && 
            (
            <div className="modal-content">
                <h1 id="modalTitle">{movieDetails?.movieTitle}</h1>
                <h3 id="modalReleaseDate">Release Date: {movieDetails?.releaseDate}</h3>
                <img id='modalImage' src={movieDetails?.backdropPosterUrl} alt="MovieBackdropPoster"/>
                <p id="modalRuntime">Runtime: {movieDetails?.runtime} minutes</p>
                <p id="modalOverview">Overview: {movieDetails?.overview}</p>
                <p id="modalGenres">Genres: {movieDetails?.genres}</p>
                <button id="ModalClose" onClick={onClose} className="closeBtn">Close</button>
            </div>
            )
            }
        </div>
    );
}
export default MovieModal;