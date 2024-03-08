import styled from "styled-components";

import { SwiperSlide } from "swiper/react";

export const Content = styled(SwiperSlide)`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  div {
    border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_200};
    height: 30rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
  }

  margin-bottom: 3rem;
`;
