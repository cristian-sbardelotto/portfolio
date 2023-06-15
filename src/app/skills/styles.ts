import { Title } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 3rem 12rem 3rem;

  > div h3 {
    font-size: 2rem;
  }
`;

export const StyledTitle = styled.h3`
  ${Title};
  margin: 3rem 0 6rem 0;
  font-size: 2.8rem;
`;

export const Skills = styled.ul`
  display: flex;
  gap: 10rem;
  flex-flow: row wrap;

  list-style: none;
`;
