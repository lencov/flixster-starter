import './MovieCard.css';
import { BaseIMDBImageURL } from '../constants';

function MovieCard({ backdrop_path, overview, poster_path, title, vote_average, onClick}) {
    const posterUrl = BaseIMDBImageURL + poster_path;

    return(
        <div className='MovieCard' onClick={onClick}>
            <img className='Card-img' src={`${posterUrl}`} alt="MoviePoster"/>
            <h2 className='MovieTitle'>{`${title}`}</h2>
            <h4 className='MovieRating'>Rating: {`${vote_average}`}</h4>
        </div>
    )

}

export default MovieCard;