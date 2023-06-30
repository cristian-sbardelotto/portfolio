import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 10.75rem;
  height: 4.5rem;

  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  background: transparent;
  font-family: '__Plus_Jakarta_Sans_fd0c7c',
    '__Plus_Jakarta_Sans_Fallback_fd0c7c';
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
    font-family: '__Plus_Jakarta_Sans_47178e',
      '__Plus_Jakarta_Sans_Fallback_47178e';
  }
`;
