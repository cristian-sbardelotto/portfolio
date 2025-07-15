import { Title } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem;
  width: 100%;

  main {
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: 2rem;

    @media screen and (max-width: 1250px) {
      justify-content: center;
    }
  }
`;

export const TitleGroup = styled.div`
  margin-bottom: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    gap: 2rem;

    margin-bottom: 20px;

    button {
      padding: 1.25rem 2rem;
      font-size: 1.2rem;
    }
  }
`;

export const StyledTitle = styled.h2`
  ${Title};
`;
