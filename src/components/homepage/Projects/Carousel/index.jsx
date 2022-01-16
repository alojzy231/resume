import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import { SwiperSlide } from 'swiper/react';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

import SwiperCore, { Pagination } from 'swiper';
import ProjectTile from './ProjectTile';
import CarouselContainer from './Carousel.styles';

SwiperCore.use([Pagination]);

export default function Carousel({ projects }) {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
  };

  return (
    <CarouselContainer loop pagination={pagination}>
      {projects.map((projectData) => (
        <SwiperSlide key={projectData.projectName}>
          <ProjectTile projectData={projectData} />
        </SwiperSlide>
      ))}
    </CarouselContainer>
  );
}

Carousel.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
