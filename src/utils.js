    export const applySorting = (moviesArray, option) => {
    	if (option === 'title') {
    	    moviesArray.sort((a, b) => a.title.localeCompare(b.title));
    	} else if (option === 'rating') {
    	    moviesArray.sort((a, b) => b.vote_average - a.vote_average);
    	} else if (option === 'releaseDate') {
    	    moviesArray.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    	}
	};

	export const removeDuplicates = (moviesArray) => {
		return moviesArray.filter((movie, index, self) =>
        	index === self.findIndex((m) => m.id === movie.id)
    	);
	}

    export const isFavorited = (movieId, favoriteMap) => {
        const entry = favoriteMap.get(movieId);
        if(entry){
            return entry[0];
        }else{
            return false;
        }
    }

    export const isWatched = (movieId, watchedMap) => {
        const entry = watchedMap.get(movieId);
        if(entry){
            return entry[0];
        }else{
            return false;
        }
    
    }

    export const getFavoritedList = (favoriteMap) => {
        const favoritedMovies = [];
        favoriteMap.forEach((value, movieId) => {
            if (value[0]) {
                favoritedMovies.push({ id: movieId, title: value[1] });
            }
        });
        return favoritedMovies;
    };

    export const getWatchedList = (watchedMap) => {
        const watchedMovies = [];
        watchedMap.forEach((value, movieId) => {
            if (value[0]) {
                watchedMovies.push({ id: movieId, title: value[1] });
            }
        });
        return watchedMovies;
    };