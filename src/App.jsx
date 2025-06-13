import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import LoadMoreBtn from './LoadMoreBtn'
import SortDropdown from './SortDropdown'
import { getMoviesNowPlaying, getMoviesByTitle } from './movieService'

const App = () => {

    const [pageNum, setPageNum] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); 
    const [movies, setMovies] = useState([]);
    const [displayType, setDisplayType] = useState('NowPlaying');
	const [sortOption, setSortOption] = useState('')
	const [sortedMovies, setSortedMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            let movieResults = [];
            if (displayType === 'NowPlaying') {
                movieResults = await getMoviesNowPlaying(pageNum);
            } else if (searchQuery) {
                movieResults = await getMoviesByTitle(searchQuery, pageNum);
            }
            setMovies((prevMovies) => [...prevMovies, ...movieResults]);
			const newMovieList = [...movies, ...movieResults]
    		applySorting(newMovieList, sortOption);
    		const uniqueMovies = removeDuplicates(newMovieList);
    		setSortedMovies(uniqueMovies);
        };
        fetchMovies();

    }, [displayType, searchQuery, pageNum, sortOption]);

    const handleLoadMore = () => {
        setPageNum((prevPage) => prevPage + 1);
    };

	const handleSearchSubmit = (query) => {
        setMovies([]);
        setPageNum(1);
		setDisplayType('Search');
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

	const applySorting = (moviesArray, option) => {
    	if (option === 'title') {
    	    moviesArray.sort((a, b) => a.title.localeCompare(b.title));
    	} else if (option === 'rating') {
    	    moviesArray.sort((a, b) => b.vote_average - a.vote_average);
    	} else if (option === 'releaseDate') {
    	    moviesArray.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    	}
	};

	const removeDuplicates = (moviesArray) => {
		return moviesArray.filter((movie, index, self) =>
        	index === self.findIndex((m) => m.id === movie.id)
    	);
	}

    return (
      <div className="App">
        <header>
           <h1>Flixster</h1>
           <SearchBar onSubmit={handleSearchSubmit} onClear={handleClearSearch}/>
           <SortDropdown onChange={setSortOption}/>
        </header>
        <main>
          <MovieList movies={sortedMovies} sortOption={sortOption}/>
		  <LoadMoreBtn onClick={handleLoadMore} />
        </main>
        <footer>
		  <h3>Copyright stuff and other info</h3>
        </footer>

      </div>
    )
}

export default App
