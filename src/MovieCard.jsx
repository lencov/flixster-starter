import './MovieCard.css';
import { BaseIMDBImageURL } from '../constants';

function MovieCard({ 
    poster_path,
    title, 
    vote_average, 
    onClick,
    isFavorited, 
    isWatched, 
    onFavoriteToggle, 
    onWatchedToggle
}) {
    const posterUrl = BaseIMDBImageURL + poster_path;

    return(
        <div className='MovieCard' onClick={onClick}>
            <img className='Card-img' src={`${posterUrl}`} alt="MoviePoster"/>
            <h2 className='MovieTitle'>{`${title}`}</h2>
            <h4 className='MovieRating'>Rating: {`${vote_average.toFixed(1)}`}</h4>
            <div className='MovieCard-buttons'>
              <button onClick={(e) => { e.stopPropagation(); onFavoriteToggle(); }}>
                {isFavorited ? '❤️' : '🤍'}
              </button>
              <button onClick={(e) => { e.stopPropagation(); onWatchedToggle(); }}>
                {isWatched ? '👁️' : '🚫'}
              </button>
            </div>
        </div>
    )

}

export default MovieCard;