import { Title } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 5vw;

  main {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-flow: row wrap;
  }
`;

export const StyledTitle = styled.h2`
  margin-bottom: 3rem;

  ${Title};
  font-size: 4rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 7rem;
  }
`;
