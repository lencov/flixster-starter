import './SearchBar.css';

function SearchBar() {

    return (
        <div className='SearchBar'>
            <form id="SearchBar">
                <label> Search </label>
                <input type="text" id="searchInput" name="searchInput" placeholder='Search'></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;