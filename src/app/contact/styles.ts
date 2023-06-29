import { Title } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.main`
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

  @media screen and (max-width: 768px) {
    section {
      width: 100vw;

      font-size: 1rem;
    }
  }
`;

export const StyledTitle = styled.h2`
  ${Title};
  margin: 0 0 5rem 5rem;

  font-size: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
