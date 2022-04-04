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
        <h2>
          Meet top <span className="accent">artisans</span>{' '}
        </h2>
      </Container>

      <div className="meet-artisans__slider"></div>
    </section>
  );
}

export default MeetArtisansSection;
