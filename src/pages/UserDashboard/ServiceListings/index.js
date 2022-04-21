import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ButtonMakeRequest from '../../../components/Button/ButtonMakeRequest';
import DashhoardHeader from '../../../components/DashboardHeader';
import DashboardSearchBar from '../../../components/DashboardSearchBar';
import Dashboardody from '../../../components/DashboardBody';
// import Button from '../../../components/Button';
// import ServiceProviderCard from '../../../components/ServiceProviderCard';

// import service_thumbnail from '../../../assets/service_thumbnail_01.png';
// import service_avatar from '../../../assets/service_avatar_01.png';

import ServiceMapView from '../../../components/ServiceMapView';

function ServicesListings() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className="dashboard services__listings">
      <DashhoardHeader>
        <div className="dashboard__top">
          <div className="dashboard__welcome">
            <h2>Hello John,</h2>
            <span>Welcome Back!</span>
          </div>

          <ButtonMakeRequest handleOnClick={() => console.log('Make Request')} />
        </div>

        <div className="dashboard__bottom">
          <div className="dashboard__tabs">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Categories" {...a11yProps(0)} />
              <Tab label="My Request" {...a11yProps(1)} />
              <Tab label="Inbox" {...a11yProps(2)} />
            </Tabs>
          </div>
          <div className="dashboard__search">
            <DashboardSearchBar
              onSubmit={() => {
                console.log('Search Query');
              }}
            />
          </div>
        </div>
      </DashhoardHeader>
      {/*<Dashboardody>
         <div className="services__sub">
          <h4>Search results (02) </h4>
          <Button classname="services__map-view btn">Map View</Button>
        </div>

        <div className="service__container">
          <div className="services__grid">
            <ServiceProviderCard
              image={service_thumbnail}
              name="Kola Painting & Company"
              owner="Jaye Olowo"
              avatar={service_avatar}
              type="Carpenter"
              address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
            />
            <ServiceProviderCard
              image={service_thumbnail}
              name="Kola Painting & Company"
              owner="Jaye Olowo"
              avatar={service_avatar}
              type="Carpenter"
              address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
            />
            <ServiceProviderCard
              image={service_thumbnail}
              name="Kola Painting & Company"
              owner="Jaye Olowo"
              avatar={service_avatar}
              type="Carpenter"
              address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
            />
            <ServiceProviderCard
              image={service_thumbnail}
              name="Kola Painting & Company"
              owner="Jaye Olowo"
              avatar={service_avatar}
              type="Carpenter"
              address="2118 Thornridge Cir. Syracuse, Connecticut 35624"
            />
          </div>
        </div> 
      </Dashboardody>*/}

      <ServiceMapView />
    </div>
  );
}

export default ServicesListings;
