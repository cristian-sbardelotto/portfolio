import { css } from 'styled-components';

export const Title = css`
  font-size: 4rem;

  span {
    color: ${({ theme }) => theme.colors.alt};
  }
`;
