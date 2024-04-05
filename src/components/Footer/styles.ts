import styled from "styled-components";

export const Container = styled.footer`
  padding: 2rem;
  height: 8rem;
  border-top: 1px solid ${({theme}) => theme.COLORS.SECONDARY_200};
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    font-size: 3.6rem;
    a {
      text-decoration: none;
      color: black;
    }
  }
`;
