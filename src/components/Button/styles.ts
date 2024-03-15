/* eslint-disable indent */
import styled from 'styled-components';

export const StyledButton = styled.button<{ variant: 'default' | 'light' }>`
  padding: 1rem 1.5rem;

  border: ${({ theme }) => theme.borders.mainLight};
  color: ${({ theme, variant }) =>
    variant === 'default' ? theme.colors.text : theme.colors.background};
  border-radius: 8px;
  background: ${({ theme, variant }) =>
    variant === 'default' ? 'transparent' : theme.colors.text};
  font-family: '__Inter_aaf875', sans-serif;
  font-weight: 600;

  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'default' ? theme.colors.text : '#d6d3d1'};
    color: ${({ theme, variant }) =>
      variant === 'default' && theme.colors.background};
    cursor: pointer;
  }
`;
