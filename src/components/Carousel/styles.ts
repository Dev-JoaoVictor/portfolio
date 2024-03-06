import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled(Swiper)``;

export const Content = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  div {
    height: 30rem;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.6rem;
  }
`;
