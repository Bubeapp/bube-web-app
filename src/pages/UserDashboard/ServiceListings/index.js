import React, { useContext, useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ButtonMakeRequest from '../../../components/Button/ButtonMakeRequest';
import DashhoardHeader from '../../../components/DashboardHeader';
import DashboardSearchBar from '../../../components/DashboardSearchBar';
import ServiceMapView from '../../../components/ServiceMapView';
import ServiceProviderList from '../../../components/ServiceProviderList';
import ButtonBack from '../../../components/Button/ButtonBack';
import TabPanel from '../../../components/TabPanel';
import Inbox from '../../../components/Inbox';
import DashboardBody from '../../../components/DashboardBody';
import RequestList from '../../../components/RequestList';

import { UserContext } from '../../../contexts/user/userContext';

function ServicesListings() {
  const { currentUser } = useContext(UserContext);
  const [value, setValue] = useState(0);
  const [viewOnMAp, setViewOnMap] = useState(false);

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
          <ButtonBack />

          <ButtonMakeRequest />
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
      <TabPanel value={value} index={0}>
        {!viewOnMAp ? (
          <DashboardBody>
            <ServiceProviderList goToMapView={() => setViewOnMap(!viewOnMAp)} />
          </DashboardBody>
        ) : (
          <ServiceMapView backToListView={() => setViewOnMap(!viewOnMAp)} />
        )}
      </TabPanel>

      <TabPanel value={value} index={1}>
        <DashboardBody>
          <RequestList />
        </DashboardBody>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <DashboardBody>
          <Inbox />
        </DashboardBody>
      </TabPanel>
    </div>
  );
}

export default ServicesListings;
