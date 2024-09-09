import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="py-4 text-center">
      <input
        type="text"
        className="px-4 py-2 border border-gray-300 rounded-full w-full max-w-lg"
        placeholder="Search events, challenges, and results..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
