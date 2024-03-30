/* eslint-disable indent */
import styled, { DefaultTheme } from 'styled-components';

function backgroundVariantStyles(
  variant: 'default' | 'light' | 'dark',
  theme: DefaultTheme
) {
  switch (variant) {
    case 'default':
      return theme.colors.lightText;
    case 'light':
      return '#d6d3d1';
    case 'dark':
      return '#fff1';
  }
}

export const StyledButton = styled.button<{
  $variant: 'default' | 'light' | 'dark';
}>`
  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: ${({ theme }) => theme.borders.main};
  color: ${({ theme, $variant }) =>
    $variant === 'light' ? theme.colors.background : theme.colors.lightText};
  border-radius: 8px;
  background: ${({ theme, $variant }) =>
    $variant === 'light' ? theme.colors.lightText : 'transparent'};
  font-family: '__Inter_aaf875', sans-serif;
  font-weight: 600;

  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ theme, $variant }) =>
      backgroundVariantStyles($variant, theme)};
    color: ${({ theme, $variant }) =>
      $variant === 'default' && theme.colors.background};
    cursor: pointer;
  }
`;
