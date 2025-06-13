import './Sidebar.css';
function Sidebar({ favoritedMovies, watchedMovies, setCurrentPage }) {
  return (
    <div className="Sidebar">
      <h2>Navigation</h2>
      <ul>
        <li onClick={() => setCurrentPage('Home')}>Home</li>
        <li onClick={() => setCurrentPage('Favorites')}>Favorites</li>
        <li onClick={() => setCurrentPage('Watched')}>Watched</li>
      </ul>
      <h2>Favorites</h2>
      <ul>
        {favoritedMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <h2>Watched</h2>
      <ul>
        {watchedMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;