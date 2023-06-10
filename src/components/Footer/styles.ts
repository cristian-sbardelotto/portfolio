import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 2rem 5rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
`;
