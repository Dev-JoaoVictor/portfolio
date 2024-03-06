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
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 2.6rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  }

  p {
    text-align: center;
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    font-weight: 500;
  }
`;

export const Link = styled.a`
  gap: 2rem;
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 1.8rem;

  padding: 1.8rem;
  border-radius: 0.6rem;

  color: white;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`;

export const Button = styled.a`
  position: fixed;
  bottom: 0;
  right: 0;
`;
