/* eslint-disable indent */
import styled from 'styled-components';

export const StyledButton = styled.button<{ variant: 'default' | 'light' }>`
  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: ${({ theme }) => theme.borders.main};
  color: ${({ theme, variant }) =>
    variant === 'default' ? theme.colors.lightText : theme.colors.background};
  border-radius: 8px;
  background: ${({ theme, variant }) =>
    variant === 'default' ? 'transparent' : theme.colors.lightText};
  font-family: '__Inter_aaf875', sans-serif;
  font-weight: 600;

  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'default' ? theme.colors.lightText : '#d6d3d1'};
    color: ${({ theme, variant }) =>
      variant === 'default' && theme.colors.background};
    cursor: pointer;
  }
`;
