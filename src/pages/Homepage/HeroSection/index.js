import React from 'react';
import { useFormik } from 'formik';

import Slider from '../../../components/Slider';
import Container from '../../../layouts/Container';

import axios from '../../../util/axios';

import target_lock from '../../../assets/target-lock_icon.svg';

function HeroSection() {
  const initialValues = {
    searchQuery: '',
  };

  const servicesNearMe = () => {
    console.log('servicesNearMe');
  };

  const onSubmit = async (values, onSubmitProps) => {
    const { searchQuery } = values;
    onSubmitProps.setSubmitting(false);

    const { data } = await axios.get(`/services?name=${searchQuery}`);
    console.log(data);
  };

  const { values, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <header className="hero__section" id="section--header">
      <Container>
        <h1 className="hero__heading">
          The easiest way to access <span className="accent">artisans</span> around you
          is with <span>BuBe</span>
        </h1>
        <p className="hero__description">
          Bube makes it easier for you to connect with artisans around you for your
          various needs. Download the App today to get started
        </p>
        <form className="hero__form" onSubmit={handleSubmit}>
          <input
            className="hero__search"
            type="search"
            placeholder="Search for services"
            name="search"
            id="search"
            value={values.searchQuery}
            onChange={handleChange}
          />
          <button
            disabled={isSubmitting}
            type="submit"
            className="hero__btn btn btn--primary btn--rounded"
          >
            Send Request
          </button>
        </form>
        <button className="hero__near-me">
          <img src={target_lock} alt="target lock icon" />
          <span>Near me</span>
        </button>

        <Slider />
      </Container>
    </header>
  );
}

export default HeroSection;
