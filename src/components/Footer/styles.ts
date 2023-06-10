import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 2rem 5rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 5rem;

  position: fixed;
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.altBackground};

  > p {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 1.4rem;
  }

  > button {
    width: 5rem;
    height: 5rem;

    background-color: ${({ theme }) => theme.colors.alt};
    border: none;
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
    justify-content: space-around;

    > p {
      font-size: 1.2rem;
    }

    > button {
      display: none;
    }

    svg {
      height: 20px;
    }
  }
`;
