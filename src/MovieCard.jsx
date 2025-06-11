import './MovieCard.css';

function MovieCard({id, backdrop_path, overview, poster_path, title, vote_average}) {
    const posterUrl = "https://image.tmdb.org/t/p/w500" + poster_path;

    return(
        <div className='MovieCard'>
            <img className='Card-img' src={`${posterUrl}`} alt="MoviePoster"/>
            <h1 className='MovieTitle'>{`${title}`}</h1>
            <h2 className='MovieRating'>Rating: {`${vote_average}`}</h2>
        </div>
    )

}

export default MovieCard;