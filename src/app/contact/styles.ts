import { Title } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.div`
  main {
    img {
      width: 100vw;
      height: 20vh;
      margin-bottom: 5rem;

      object-fit: cover;
    }

    section {
      width: 80vw;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const StyledTitle = styled.h2`
  ${Title};
  margin: 0 0 5rem 5rem;

  font-size: 4rem;
`;
