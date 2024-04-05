import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-direction: column;

  border-radius: 0.8rem;

  padding: 2.4rem;

  p {
    font-size: 2.4rem;
    text-align: center;
    font-weight: 400;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    p {
      font-size: 2.6rem;
    }
  }
`;
