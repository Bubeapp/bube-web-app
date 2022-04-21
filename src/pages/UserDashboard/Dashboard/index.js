import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TabPanel from '../../../components/TabPanel';
import ServicesCard from '../../../components/ServicesCard';
import DashhoardHeader from '../../../components/DashboardHeader';
import DashboardBody from '../../../components/DashboardBody';
import DashboardSearchBar from '../../../components/DashboardSearchBar';
import ButtonMakeRequest from '../../../components/Button/ButtonMakeRequest';
import RequestCard from '../../../components/RequestCard';
import RequestList from '../../../components/RequestList';

import categories_img_01 from '../../../assets/categories_img_01.png';
import categories_img_02 from '../../../assets/categories_img_02.png';
import categories_img_03 from '../../../assets/categories_img_03.png';
import request_img from '../../../assets/request_img.png';
import Inbox from '../../../components/Inbox';

function Dashboard() {
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
    <div className="dashboard">
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
      <DashboardBody>
        <TabPanel value={value} index={0}>
          <div className="services">
            <div className="services__categories">
              <ServicesCard
                cardTitle="Events and entertainment"
                cardImage={categories_img_01}
              />
              <ServicesCard
                cardTitle="Home office improvement"
                cardImage={categories_img_02}
              />
              <ServicesCard cardTitle="Painting" cardImage={categories_img_03} />
              <ServicesCard
                cardTitle="Construction & renovation"
                cardImage={categories_img_02}
              />
              <ServicesCard
                cardTitle="Thorough Cleaning"
                cardImage={categories_img_01}
              />
              <ServicesCard cardTitle="Beauty services" cardImage={categories_img_01} />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RequestList>
            <RequestCard
              title="Plumbing"
              image={request_img}
              summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet magni
          dolorum tempore expedita eius asperiores, dolores blanditiis corrupti
          obcaecati, perspiciatis omnis incidunt illum? Culpa laboriosam quod dolores
          mollitia vel."
              amount={500}
              datetime="15 May 2020 8:30 am"
            />
            <RequestCard
              title="Plumbing"
              image={request_img}
              summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet magni
          dolorum tempore expedita eius asperiores, dolores blanditiis corrupti
          obcaecati."
              amount={500}
              datetime="15 May 2020 8:30 am"
            />
            <RequestCard
              title="Plumbing"
              image={request_img}
              summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet magni
          dolorum tempore expedita eius asperiores, dolores blanditiis corrupti
          obcaecati."
              amount={500}
              datetime="15 May 2020 8:30 am"
            />
            <RequestCard
              title="Plumbing"
              image={request_img}
              summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet magni
          dolorum tempore expedita eius asperiores, dolores blanditiis corrupti
          obcaecati, perspiciatis omnis incidunt illum? Culpa laboriosam quod dolores
          mollitia vel."
              amount={500}
              datetime="15 May 2020 8:30 am"
            />
          </RequestList>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Inbox />
        </TabPanel>
      </DashboardBody>
    </div>
  );
}

export default Dashboard;
