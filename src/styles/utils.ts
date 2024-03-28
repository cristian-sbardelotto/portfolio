import { css } from 'styled-components';

export const Title = css`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 4rem;

  span {
    color: ${({ theme }) => theme.colors.main};
  }
`;
