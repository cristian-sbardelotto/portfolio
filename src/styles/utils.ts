import { css, keyframes } from 'styled-components';

export const Title = css`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 4rem;

  span {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const appearUp = keyframes`
  0% {
    transform: translateY(2rem);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const appearDown = keyframes`
  0% {
    transform: translateY(-2rem);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
