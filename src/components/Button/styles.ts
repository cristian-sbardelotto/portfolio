import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 10.75rem;
  height: 4.5rem;

  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  background: transparent;
  font-family: '__Inter_aaf875', sans-serif;
  font-weight: 600;

  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.text};

    * {
      color: ${({ theme }) => theme.colors.background};
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: '__Inter_aaf875', sans-serif;
  }
`;
