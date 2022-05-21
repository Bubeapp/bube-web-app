import React, { useContext, useState } from 'react';
import axios from '../../../util/axios';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MyLocationIcon from '@mui/icons-material/MyLocation';

import TabPanel from '../../../components/TabPanel';
import ServicesCard from '../../../components/ServicesCard';
import DashhoardHeader from '../../../components/DashboardHeader';
import DashboardBody from '../../../components/DashboardBody';
import DashboardSearchBar from '../../../components/DashboardSearchBar';
import ButtonMakeRequest from '../../../components/Button/ButtonMakeRequest';
import RequestList from '../../../components/RequestList';

import categories_img_01 from '../../../assets/categories_img_01.png';
import categories_img_02 from '../../../assets/categories_img_02.png';
import categories_img_03 from '../../../assets/categories_img_03.png';
import Inbox from '../../../components/Inbox';

import { UserContext } from '../../../contexts/user/userContext';
import CustomModal from '../../../components/Modal';
import Form from '../../../components/Form';
import TextArea from '../../../components/TextArea';
import DatePicker from '../../../components/DatePicker';
import Button from '../../../components/Button';
import LoadingSpinner from '../../../components/LoadingSpinner';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { ServicesContext } from '../../../contexts/services/serviceContext';
import InputFieldWithIcon from '../../../components/InputFieldWithIcon';

function Dashboard() {
  const { currentUser } = useContext(UserContext);
  const { categories } = useContext(ServicesContext);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState(0);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

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
    <>
      <div className="dashboard">
        <DashhoardHeader>
          <div className="dashboard__top">
            <div className="dashboard__welcome">
              <h2>{`Hello ${currentUser?.username},`}</h2>
              <span>Welcome Back!</span>
            </div>

            <ButtonMakeRequest handleOnClick={handleOpen} />
          </div>

          <div className="dashboard__bottom">
            <div className="dashboard__tabs">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Categories" {...a11yProps(0)} />
                <Tab label="My Request" {...a11yProps(1)} />
                <Tab label="Inbox" {...a11yProps(2)} />
              </Tabs>
            </div>
            <div className="dashboard__search">
              <DashboardSearchBar />
            </div>
          </div>
        </DashhoardHeader>
        <DashboardBody>
          <TabPanel value={value} index={0}>
            <div className="services">
              <div className="services__categories">
                {categories ? (
                  categories.map(category => (
                    <ServicesCard
                      key={category._id}
                      cardTitle={category.name}
                      cardImage={category.image_cover}
                    />
                  ))
                ) : (
                  <LoadingSpinner />
                )}
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
                <ServicesCard
                  cardTitle="Beauty services"
                  cardImage={categories_img_01}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RequestList />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Inbox />
          </TabPanel>
        </DashboardBody>
      </div>

      <CustomModal open={openModal} handleClose={handleClose}>
        <Form>
          <h3>Send Request</h3>
          <TextArea />
          <DatePicker />
          <InputFieldWithIcon
            type="number"
            placeholder="Budget"
            name="Budget"
            id="Budget"
            Icon={'USD'}
          />
          <InputFieldWithIcon
            type="text"
            placeholder="Location"
            name="location"
            id="location"
            Icon={<MyLocationIcon />}
          />
          <div className="">
            <FormControl>
              <FormLabel id="payment-method">Payment Method</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="payment-method"
              >
                <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
                <FormControlLabel
                  value="Debit Card"
                  control={<Radio />}
                  label="Debit Card"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <p>Note: Upload only Photos relating to job Description</p>
          <Button classname="btn btn--primary btn--full">Send Request</Button>
        </Form>
      </CustomModal>
    </>
  );
}

export default Dashboard;
