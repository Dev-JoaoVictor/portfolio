import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;

  > section {
    display: flex;
    gap: 3.2rem;
    flex-direction: column;

    > div {
      border-top: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_200};

      h2 {
        font-size: 4rem;
        padding-top: 2.4rem;
      }

      p {
        font-size: 1.6rem;
        line-height: 3rem;
        margin: 2.4rem 0;
      }
    }
  }

  img {
    width: 100%;
  }
`;
