import { Title } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.div`
  main {
    img {
      width: 100vw;
      height: 20vh;

      object-fit: cover;
    }
  }
`;

export const StyledTitle = styled.h2`
  ${Title};
  margin: 0 0 5rem 5rem;

  font-size: 4rem;
`;
