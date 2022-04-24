import React from 'react';

import Container from '../../../layouts/Container';

import artisans__img_01 from '../../../assets/artisans_img_01.png';
import artisans__img_02 from '../../../assets/artisans_img_02.png';
import artisans__img_03 from '../../../assets/artisans_img_03.png';
import artisans__img_04 from '../../../assets/artisans_img_04.png';
import chevron_left from '../../../assets/chevron-left_icon.svg';
import chevron_right from '../../../assets/chevron-right_icon.svg';

function MeetArtisansSection() {
  return (
    <section className="meet-artisans__section" id="section--meet-artisans">
      <Container>
        <h2 className="meet-artisans__caption">
          Meet top <span className="accent">artisans</span>{' '}
        </h2>
      </Container>

      <div className="meet-artisans__slider">
        <div className="meet-artisans__slider-img">
          <img src={artisans__img_01} alt="Artisans shots" />
        </div>
        <div className="meet-artisans__slider-img">
          <img src={artisans__img_02} alt="Artisans shots" />
        </div>
        <div className="meet-artisans__slider-img">
          <img src={artisans__img_03} alt="Artisans shots" />
        </div>
        <div className="meet-artisans__slider-img">
          <img src={artisans__img_04} alt="Artisans shots" />
        </div>

        <button className="meet-artisans__btn meet-artisans__prev">
          <img src={chevron_left} alt="Chevron left icon" />
        </button>
        <button className="meet-artisans__btn meet-artisans__next">
          <img src={chevron_right} alt="Chevron right icon" />
        </button>
      </div>
    </section>
  );
}

export default MeetArtisansSection;
