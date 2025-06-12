import './MovieCard.css';

function MovieCard({ backdrop_path, overview, poster_path, title, vote_average}) {
    const posterUrl = "https://image.tmdb.org/t/p/w500" + poster_path;

    return(
        <div className='MovieCard' >
            <img className='Card-img' src={`${posterUrl}`} alt="MoviePoster"/>
            <h2 className='MovieTitle'>{`${title}`}</h2>
            <h4 className='MovieRating'>Rating: {`${vote_average}`}</h4>
        </div>
    )

}

export default MovieCard;