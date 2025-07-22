/* eslint-disable indent */
import theme from '@/styles/theme';
import styled from 'styled-components';
import { ButtonVariants } from '.';

interface VariantStyle {
  text: string;
  background: string;
  border: string;
  hoverBorder?: string;
  hoverText?: string;
  hoverBackground?: string;
}

function getVariantStyle(
  variant: ButtonVariants,
  property: keyof VariantStyle
) {
  const variants: Record<ButtonVariants, VariantStyle> = {
    default: {
      text: theme.colors.background,
      background: theme.colors.main,
      border: theme.borders.main,
    },
    light: {
      text: theme.colors.background,
      background: theme.colors.lightText,
      border: theme.borders.main,
    },
    dark: {
      text: theme.colors.lightText,
      background: 'transparent',
      border: theme.borders.main,
      hoverBackground: '#fff2',
    },
    outline: {
      background: 'transparent',
      text: theme.colors.lightText,
      border: theme.borders.main,
      hoverBorder: theme.colors.main,
      hoverText: theme.colors.main,
    },
  };

  return variants[variant][property];
}

export const StyledButton = styled.button<{
  $variant: ButtonVariants;
}>`
  padding: 1.6rem 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: ${({ $variant }) => getVariantStyle($variant, 'border')};
  color: ${({ $variant }) => getVariantStyle($variant, 'text')};
  border-radius: 8px;
  background: ${({ $variant }) => getVariantStyle($variant, 'background')};
  font-weight: 600;
  font-size: 1.6rem;

  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    opacity: 0.8;
    border-color: ${({ $variant }) => getVariantStyle($variant, 'hoverBorder')};
    color: ${({ $variant }) => getVariantStyle($variant, 'hoverText')};
    background: ${({ $variant }) =>
      getVariantStyle($variant, 'hoverBackground')};
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
