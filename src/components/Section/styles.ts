import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  img {
    width: 100%;
  }

  > h2 {
    font-size: 2.2rem;
    text-align: center;
  }

  > ul {
    gap: 1rem;
    display: flex;
    list-style: inside;
    justify-content: center;
    font-size: 1.6rem;
  }

  > p {
    font-size: 1.6rem;
    text-align: justify;
  }
`;
