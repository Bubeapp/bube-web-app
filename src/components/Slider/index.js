import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import CategoryCard Images
import category_img_01 from '../../assets/category_image_01.png';
import category_img_02 from '../../assets/category_image_02.png';
import category_img_03 from '../../assets/category_image_03.png';
import category_img_04 from '../../assets/category_image_04.png';
import category_img_05 from '../../assets/category_image_05.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CategoryCard from '../CategoryCard';

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView={5}
        navigation
        // pagination={{ clickable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <CategoryCard image={category_img_01} title="Painting" numOfAvailable={25} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            image={category_img_02}
            title="Events & Entertainment"
            numOfAvailable={13}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image={category_img_03} title="Funiture" numOfAvailable={34} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image={category_img_04} title="Gardening" numOfAvailable={7} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image={category_img_05} title="Tailoring" numOfAvailable={25} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image={category_img_01} title="Painting" numOfAvailable={22} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image={category_img_03} title="Funiture" numOfAvailable={25} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
