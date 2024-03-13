import styled from "styled-components";

export const Container = styled.main``;

export const Content = styled.div`
  padding: 0 2.2rem;
  margin: 5rem 0;

  display: flex;
  gap: 3rem;
  flex-direction: column;

  img {
    align-self: center;
    width: 25rem;
    border-radius: 0.8rem;
  }

  h2 {
    font-size: 2.6rem;
  }
`;

export const AboutMe = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    span {
      font-size: 2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.PRIMARY_100};
    }

    p {
      line-height: 2.6rem;
      font-size: 1.6rem;
      text-align: justify;
    }

    strong {
      color: ${({ theme }) => theme.COLORS.PRIMARY_100};
    }
  }
`;

export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1.6rem;
  }

  ul {
    list-style: inside;

    li {
      font-size: 1.6rem;
      margin-top: 1rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY_300};
      font-weight: bold;
    }
  }
`;
