import './Sidebar.css';
function Sidebar({ favoritedMovies, watchedMovies }) {
    return (
        <div className="Sidebar">
            <h2>Favorites</h2>
            <ul>
                {favoritedMovies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
            <h2>Watched</h2>
            <ul>
                {watchedMovies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default Sidebar;