import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  padding: 0 2.2rem;
`;

export const Content = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
`;

export const Presetation = styled.section`
  img {
    width: 100%;
  }

  h1 {
    font-size: 2.6rem;
    text-align: center;
    margin-bottom: 1.8rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  }

  p {
    text-align: center;
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_300};
    font-weight: 500;
  }

  animation: slide-right 500ms backwards;

  @keyframes slide-right {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }
  }
`;
