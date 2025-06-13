import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import LoadMoreBtn from './LoadMoreBtn'
import SortDropdown from './SortDropdown'
import Sidebar from './Sidebar'
import { getMoviesNowPlaying, getMoviesByTitle } from './movieService'
import { removeDuplicates, applySorting, getFavoritedList, getWatchedList } from './utils'

const App = () => {

    const [pageNum, setPageNum] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); 
    const [movies, setMovies] = useState([]);
    const [displayType, setDisplayType] = useState('NowPlaying');
	const [sortOption, setSortOption] = useState('');
	const [sortedMovies, setSortedMovies] = useState([]);
	const [favoriteMap, setFavoriteMap] = useState(new Map()); // {movieId, [boolean, movieTitle]}
	const [watchedMap, setWatchedMap] = useState(new Map()); // {movieId, [boolean, movieTitle]}
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

	const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

	const favoritedMovies = getFavoritedList(favoriteMap);
    const watchedMovies = getWatchedList(watchedMap);

    return (
        <div className="App">
            <button onClick={toggleSidebar} className="ToggleSidebarButton">
                {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </button>
            {isSidebarOpen && (
                <Sidebar favoritedMovies={favoritedMovies} watchedMovies={watchedMovies} />
            )}
            <div className="MainContent" style={{ marginLeft: isSidebarOpen ? '250px' : '0' }}>
                <header>
                    <h1>Flixster</h1>
                    <SearchBar onSubmit={handleSearchSubmit} onClear={handleClearSearch} />
                    <SortDropdown onChange={setSortOption} />
                </header>
                <main>
                    <MovieList 
                        movies={sortedMovies} 
                        favoriteMap={favoriteMap} 
                        watchedMap={watchedMap} 
                        setFavoriteMap={setFavoriteMap} 
                        setWatchedMap={setWatchedMap} 
                    />
                    <LoadMoreBtn onClick={handleLoadMore} />
                </main>
                <footer>
                    <h3>Copyright stuff and other info</h3>
                </footer>
            </div>
        </div>
    );ftvcvckrhficddnbuvntngjlbfhhnftj
}

export default App
