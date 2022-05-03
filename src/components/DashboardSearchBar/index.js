import React, { useState } from 'react';

import search_icon from '../../assets/search_icon.svg';

function DashboardSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    console.log('Search Query: ', searchQuery);
  };

  return (
    <form onSubmit={handleOnSubmit} className="dashboard__search-form">
      <button type="submit">
        <img src={search_icon} alt="search icon" />
      </button>
      <input
        type="search"
        placeholder="Search for services"
        name="search"
        id="search"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default DashboardSearchBar;
