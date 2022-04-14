import React from 'react';
import Button from '../../../components/Button';
import DashhoardHeader from '../../../components/DashboardHeader';

import circle_left_icon from '../../../assets/arrow-circle-left_icon.svg';
import plus_icon from '../../../assets/plus_icon.svg';
import search_icon from '../../../assets/search_icon.svg';

function Services() {
  return (
    <div>
      <DashhoardHeader>
        <div className="dashboard__top">
          <Button classname="dashboard__request-btn btn btn--ghost">
            <img src={circle_left_icon} alt="Plus icon" />
            <span>Back</span>
          </Button>

          <Button classname="dashboard__request-btn btn btn--primary">
            <img src={plus_icon} alt="Plus icon" />
            <span>Make Request</span>
          </Button>
        </div>

        <div className="dashboard__bottom">
          <div className="dashboard__service">
            <h3>Home Improvements</h3>
            <span>234 services available in this catergory.</span>
          </div>
          <div className="dashboard__search">
            <form className="dashboard__search-form">
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
          </div>
        </div>
      </DashhoardHeader>
    </div>
  );
}

export default Services;
