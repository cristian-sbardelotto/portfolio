import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 1rem 1.5rem;

  border: ${({ theme }) => theme.borders.mainLight};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  background: transparent;
  font-family: '__Inter_aaf875', sans-serif;
  font-weight: 600;

  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    cursor: pointer;
  }
`;
