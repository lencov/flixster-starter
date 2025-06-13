import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit, onClear }) {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
    };
    const handleClear = () => {
        setInputValue('');
        onClear();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search" />
            <button type="submit">Search</button>
            <button type="button" onClick={handleClear}>Clear</button>
        </form>
    );
}
export default SearchBar;
