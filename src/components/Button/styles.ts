import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 1rem 1.5rem;

  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  background: transparent;
  font-family: '__Plus_Jakarta_Sans_fd0c7c',
    '__Plus_Jakarta_Sans_Fallback_fd0c7c';
  font-weight: 600;

  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    cursor: pointer;

    * {
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;
