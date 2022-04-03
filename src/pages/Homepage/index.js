import React from 'react';

import Swiper from '../../layouts/Swiper';
import Container from '../../layouts/Container';

import target_lock from '../../assets/target-lock_icon.svg';

function Homepage() {
  return (
    <main>
      <Container>
        <h1 className="hero__heading">
          The easiest way to access <span classname="accent">artisans</span> around you
          is with <span>BuBe</span>
        </h1>
        <p className="hero__description">
          Flashlive makes it easier for you to connect with artisans around you for your
          various needs. Download the App today to get started
        </p>
        <form className="hero__form">
          <input
            className="hero__search"
            type="search"
            placeholder="Search for services"
            name="search"
            id="search"
          />
          <button className="hero__btn btn btn--primary btn--rounded">
            Send Request
          </button>
        </form>
        <button className="hero__near-me">
          <img src={target_lock} alt="target lock icon" />
          <span>Near me</span>
        </button>

        <Swiper></Swiper>
      </Container>
    </main>
  );
}

export default Homepage;
