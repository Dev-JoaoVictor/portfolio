import styled from "styled-components";

export const Container = styled.div<{ $isOpen: boolean }>`
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
`;

export const Button = styled.button`
  font-size: 3.2rem;
`;
