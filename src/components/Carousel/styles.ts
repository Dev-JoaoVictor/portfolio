import { SwiperSlide, Swiper } from "swiper/react";

import styled from "styled-components";

export const Container = styled(Swiper)`

  width: calc(100vw - 5rem);

  display: flex;
  flex-direction: column;

`;

export const Content = styled(SwiperSlide)`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  img {
    width: 100%;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
  }

  margin-bottom: 4rem;
`;
