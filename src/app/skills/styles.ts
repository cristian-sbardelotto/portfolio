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
  margin-top: 3rem;
  font-size: 2.8rem;
`;
