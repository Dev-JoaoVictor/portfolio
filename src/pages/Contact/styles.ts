import styled from "styled-components";

export const Content = styled.div`
  padding: 0 2.2rem;
  margin: 5rem 0;
`;

export const Text = styled.section`
  display: flex;
  gap: 2.4rem;
  flex-direction: column;

  padding-bottom: 3.2rem;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.SECONDARY_200};

  h2 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 3rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    font-size: 3.6rem;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PRIMARY_300};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 3.2rem;

  a {
    width: 20rem;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    color: white;
  }

  > div {
    display: flex;
    gap: 0.8rem;
    flex-direction: column;

    label {
      font-size: 1.6rem;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.PRIMARY_300};
    }

    input,
    textarea {
      height: 4.8rem;
      border: none;
      padding: 1.6rem;
      outline: none;
      font-size: 1.4rem;
      background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    }

    textarea {
      height: 9.6rem;
      resize: none;
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.SECONDARY_300};
    }
  }
`;
