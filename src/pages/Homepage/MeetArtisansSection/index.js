import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Container from '../../../layouts/Container';

function MeetArtisansSection() {
  return (
    <section className="meet-artisans__section">
      <Container>
        <h2 className="meet-artisans__caption">
          Meet top <span className="accent">artisans</span>{' '}
        </h2>
      </Container>

      <div className="meet-artisans__slider">
        <div className="meet-artisans__slider-img">IMG 1</div>
        <div className="meet-artisans__slider-img">IMG 2</div>
        <div className="meet-artisans__slider-img">IMG 3</div>
        <div className="meet-artisans__slider-img">IMG 4</div>

        <button className="meet-artisans__btn meet-artisans__prev">prev</button>
        <button className="meet-artisans__btn meet-artisans__next">Next</button>
      </div>
    </section>
  );
}

export default MeetArtisansSection;
