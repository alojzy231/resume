import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { SwiperSlide } from 'swiper/react';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

import SwiperCore, { Pagination } from 'swiper';
import Slide from './Slide';
import CarouselContainer from './Carousel.styles';

SwiperCore.use([Pagination]);

export default function Carousel() {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
  };

  return (
    <CarouselContainer loop pagination={pagination}>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
    </CarouselContainer>
  );
}
