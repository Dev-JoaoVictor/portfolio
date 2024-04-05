import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  padding: 0 2.2rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_200};
`;

export const Nav = styled.div<{ $isOpen: boolean }>`
  ul {
    list-style: none;
    font-size: 1.6rem;
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};

    top: 8rem;
    right: 0;
    z-index: 1000;
    position: absolute;

    width: 100%;
    padding: 0 3.2rem;
    height: calc(100vh - 8rem);
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_100};
  }

  li {
    padding: 2.4rem 0;
    font-size: 1.8rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_300};
    > a {
      color: ${({ theme }) => theme.COLORS.PRIMARY_300};
    }
  }

  button {
    font-size: 3.2rem;
  }

  @media screen and (min-width: 768px) {
    button {
      display: none;
    }

    ul {
      display: flex;
      justify-content: flex-end;

      z-index: 1;
      top: 0;
      gap: 4rem;
      background-color: transparent;
      height: 8rem;

      li {
        border: none;
        font-weight: 500;
      }
    }
  }
`;
