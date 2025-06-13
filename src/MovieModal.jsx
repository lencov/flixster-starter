import './MovieModal.css';
import { useState, useEffect } from 'react'
import { getMovieDetails, getMovieTrailers } from './movieService';

function MovieModal({movieId, onClose}) {
    const [movieDetails, setMovieDetails] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            let movie = await getMovieDetails(movieId);
            let trailers = await getMovieTrailers(movieId);
            const youtubeTrailer = trailers.results.find(
                (trailer) => trailer.site === 'YouTube'
            );
            if (youtubeTrailer) {
                setTrailerKey(youtubeTrailer.key);
            }
            setMovieDetails(movie);
        };
        fetchMovieDetails();
    }, [movieId]);

    return (
        <div id="movieModal" className="modal-overlay">
            {movieDetails && 
            (
            <div className="modal-content">
                <h1 id="modalTitle">{movieDetails?.movieTitle}</h1>
                <h3 id="modalReleaseDate">Release Date: {movieDetails?.releaseDate}</h3>
                <img id='modalImage' src={movieDetails?.backdropPosterUrl} alt="MovieBackdropPoster"/>
                <p id="modalRuntime">Runtime: {movieDetails?.runtime} minutes</p>
                <p id="modalOverview">Overview: {movieDetails?.overview}</p>
                <p id="modalGenres">Genres: {movieDetails?.genres}</p>
                
                {trailerKey && (
                    <div className="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${trailerKey}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                <button id="ModalClose" onClick={onClose} className="closeBtn">Close</button>
            </div>
            )
            }
        </div>
    );
}
export default MovieModal;