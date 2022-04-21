import React from 'react';

import search_icon from '../../assets/search_icon.svg';

function DashboardSearchBar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="dashboard__search-form">
      <button>
        <img src={search_icon} alt="search icon" />
      </button>
      <input
        type="search"
        placeholder="Search for services"
        name="search"
        id="search"
      />
    </form>
  );
}

export default DashboardSearchBar;
