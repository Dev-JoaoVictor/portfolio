import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  gap: 8rem;
  flex-direction: column;
  padding: 0 2.2rem;

  position: relative;

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
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  > h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_200};
  }

  ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
    list-style: inside;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  > p {
    font-size: 1.6rem;
    text-align: justify;
  }
`;

