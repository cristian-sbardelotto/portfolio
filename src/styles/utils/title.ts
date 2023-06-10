import { css } from 'styled-components';

export const Title = css`
  font-size: 2.5rem;

  span {
    color: ${({ theme }) => theme.colors.alt};
  }
`;
