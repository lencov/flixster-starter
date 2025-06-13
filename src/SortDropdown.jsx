import './SortDropdown.css';

function SortDropdown({onChange}) {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return(
        <select id="sortDropdown" title="Sort playlists" onChange={handleChange}>
            <option value="default">Default</option>
            <option value="title">Title (A-Z)</option>
            <option value="rating">Rating (Highest First)</option>
            <option value="releaseDate">Release Date (Newest First)</option>
        </select>
    )
}

export default SortDropdown;