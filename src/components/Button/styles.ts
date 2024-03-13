import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled(Link)`
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 1.7rem 3.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_300};
  color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  text-align: center;
  width: 17.5rem;
`;
