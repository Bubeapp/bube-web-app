import React, { useContext, useState } from 'react';

import search_icon from '../../assets/search_icon.svg';
import { ServicesContext } from '../../contexts/services/serviceContext';

function DashboardSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchServices } = useContext(ServicesContext);

  const handleOnSubmit = event => {
    event.preventDefault();
    console.log('Search Query: ', searchQuery);
    searchServices(searchQuery);
    setSearchQuery('');
  };

  console.log(searchQuery);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
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
        onChange={handleSearchChange}
      />
    </form>
  );
}

export default DashboardSearchBar;
