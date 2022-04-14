import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Button from '../../../components/Button';
import TabPanel from '../../../components/TabPanel';
import DashhoardHeader from '../../../components/DashboardHeader';
import DashboardBody from '../../../components/DashboardBody';

import plus_icon from '../../../assets/plus_icon.svg';
import search_icon from '../../../assets/search_icon.svg';

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

          <Button classname="dashboard__request-btn btn btn--primary">
            <img src={plus_icon} alt="Plus icon" />
            <span>Make Request</span>
          </Button>
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
      <DashboardBody>
        <TabPanel value={value} index={0}>
          Categories
        </TabPanel>
        <TabPanel value={value} index={1}>
          My Request
        </TabPanel>
        <TabPanel value={value} index={2}>
          Inbox
        </TabPanel>
      </DashboardBody>
    </div>
  );
}

export default Dashboard;
