import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import LoadMoreBtn from './LoadMoreBtn'
import { getMoviesNowPlaying, getMoviesByTitle } from './movieService'

const App = () => {

    const [pageNum, setPageNum] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); 
    const [movies, setMovies] = useState([]);
    const [displayType, setDisplayType] = useState('NowPlaying');

    useEffect(() => {
        const fetchMovies = async () => {
            let movieResults = [];
            if (displayType === 'NowPlaying') {
                movieResults = await getMoviesNowPlaying(pageNum);
            } else if (searchQuery) {
                movieResults = await getMoviesByTitle(searchQuery, pageNum);
            }
			const uniqueMovies = movieResults.filter((movie, index, self) =>
        index === self.findIndex((m) => m.id === movie.id)
    );
            setMovies((prevMovies) => [...prevMovies, ...uniqueMovies]);
        };
        fetchMovies();
    }, [displayType, searchQuery, pageNum]);

    const handleLoadMore = () => {
        setPageNum((prevPage) => prevPage + 1);
    };

	const handleSearchSubmit = (query) => {
        setMovies([]);
        setPageNum(1);
		setDisplayType('Search')
		setSearchQuery(query);
	}

	const handleClearSearch = () => {
		if (displayType === 'Search'){
			setSearchQuery('');
        	setDisplayType('NowPlaying');
        	setPageNum(1);
        	setMovies([]);
		}
	}

    return (
      <div className="App">
        <header>
           <h1>Flixster</h1>
           <SearchBar onSubmit={handleSearchSubmit} onClear={handleClearSearch}/>
           {/*place holder for the sorting stuff*/}
        </header>
        <main>
          <MovieList movies={movies} /*sortOption={sortOption}*//>
		  <LoadMoreBtn onClick={handleLoadMore} />
        </main>
        <footer>
		  <h3>Copyright stuff and other info</h3>
        </footer>

      </div>
    )
}

export default App
