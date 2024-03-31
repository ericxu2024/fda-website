import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    const searchQuery = e.target.value;
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;

