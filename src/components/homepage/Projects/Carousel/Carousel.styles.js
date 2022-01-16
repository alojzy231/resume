import styled from 'styled-components';

// eslint-disable-next-line import/no-unresolved
import { Swiper } from 'swiper/react';

const CarouselContainer = styled(Swiper)`
  margin-bottom: 3.2rem;
  .swiper-pagination-bullet {
    height: 2.4rem;
    width: 2.4rem;

    background-color: white;

    @media ${({ theme: { medias } }) => medias.tablet} {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
`;

export default CarouselContainer;
