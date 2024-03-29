import { Title } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.main``;

export const StyledTitle = styled.h2`
  ${Title};
  padding: 3rem 0 3rem 3rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const LinksGroup = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinksWrapper = styled.div`
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-inline: 2rem;
  }
`;
