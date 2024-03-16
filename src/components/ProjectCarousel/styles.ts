import styled from "styled-components";

import { SwiperSlide } from "swiper/react";

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

  margin-bottom: 3rem;
`;
