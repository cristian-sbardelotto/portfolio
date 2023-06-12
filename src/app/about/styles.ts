import styled from 'styled-components';
import { Title } from '@/styles/utils/title';

export const Container = styled.div`
  padding: 5rem;
  margin-bottom: 6rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export const SytledTitle = styled.h2`
  ${Title};

  margin-bottom: 3rem;

  font-size: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Article = styled.article`
  max-width: 80ch;

  font-size: 1.6rem;
  line-height: 175%;

  p {
    margin-bottom: 2rem;
  }
`;
