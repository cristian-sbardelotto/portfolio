import { Title } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.main`
  img {
    width: 100%;
    height: 20vh;
    margin-bottom: 9rem;

    object-fit: cover;

    @media screen and (max-width: 524px) {
      margin-bottom: 5rem;
    }
  }
`;

export const StyledTitle = styled.h2`
  ${Title};
  margin-block: 3rem;

  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
