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

  h1 {
    font-size: 2.6rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_300};
  }

  p {
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  > h2 {
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

  > p {
    font-size: 1.6rem;
    text-align: justify;
  }

  > a {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    color: ${({ theme }) => theme.COLORS.SECONDARY_100};
  }
`;
