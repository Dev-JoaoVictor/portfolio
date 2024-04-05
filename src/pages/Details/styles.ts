import styled from "styled-components";

export const Container = styled.main``;

export const Content = styled.div`
  margin: 5rem 2.2rem;
  display: flex;
  gap: 4rem;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  gap: 2.4rem;
  flex-direction: column;

  border-top: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_200};

  img {
    width: 100%;
  }

  h2 {
    font-size: 3.6rem;
    margin-top: 2.4rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 3rem;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_100};
    font-weight: bold;
  }
`;
