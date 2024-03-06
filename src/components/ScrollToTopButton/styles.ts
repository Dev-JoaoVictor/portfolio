import styled from "styled-components";

export const Container = styled.button`
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 50%;
  font-size: 2.8rem;

  display: flex;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
`;
