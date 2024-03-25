import styled from 'styled-components';
import { Title } from '@/styles/utils';

export const Container = styled.div`
  padding: 5rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export const StyledTitle = styled.h2`
  ${Title};

  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Article = styled.article`
  max-width: 120ch;

  font-size: 1.6rem;
  line-height: 175%;

  p {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.altText};
  }

  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;
