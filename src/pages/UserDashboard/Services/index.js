import React from 'react';

import Button from '../../../components/Button';
import ButtonMakeRequest from '../../../components/Button/ButtonMakeRequest';
import DashboardHeader from '../../../components/DashboardHeader';
import DashboardBody from '../../../components/DashboardBody';

import circle_left_icon from '../../../assets/arrow-circle-left_icon.svg';

import search_icon from '../../../assets/search_icon.svg';
import DashboardSearchBar from '../../../components/DashboardSearchBar';

function Services() {
  return (
    <div>
      <DashboardHeader>
        <div className="dashboard__top">
          <Button classname="dashboard__request-btn btn btn--ghost">
            <img src={circle_left_icon} alt="Plus icon" />
            <span>Back</span>
          </Button>

          <ButtonMakeRequest />
        </div>

        <div className="dashboard__bottom">
          <div className="dashboard__service">
            <h3>Home Improvements</h3>
            <span>234 services available in this catergory.</span>
          </div>
          <div className="dashboard__search">
            <DashboardSearchBar />
          </div>
        </div>
      </DashboardHeader>

      <DashboardBody></DashboardBody>
    </div>
  );
}

export default Services;
