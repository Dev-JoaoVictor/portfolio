import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  gap: 8rem;
  flex-direction: column;
  padding: 0 2.2rem;

  margin: 5rem 0;
`;

export const Presentation = styled.section`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  text-align: center;

  > div {
    h1 {
      font-size: 2.6rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY_300};
    }

    p {
      font-size: 1.8rem;
      line-height: 2.5rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    padding: 2rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};

    img {
      width: 35rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font-size: 3.2rem;
        color: ${({ theme }) => theme.COLORS.PRIMARY_100};
      }

      p {
        color: white;
      }
    }
  }
`;

export const Service = styled.section`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2.4rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  }

  ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
    list-style: inside;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  }

  p {
    font-size: 1.6rem;
    text-align: justify;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-size: 3rem;
    }

    ul {
      font-size: 1.6rem;
    }

    p {
      text-align: center;
      font-size: 2rem;
    }
  }
`;
