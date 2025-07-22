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

  @media screen and (max-width: 768px) {
    padding-inline: 20px;
    padding-bottom: 30px;
  }
`;
