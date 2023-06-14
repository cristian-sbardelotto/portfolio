import styled from 'styled-components';
import { Title } from '@/styles/utils';

import Image from 'next/image';

export const Container = styled.main`
  width: 100%;
  padding: 0 5vw;
  margin: 8vh 0 12vh 0;

  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: initial;
    gap: 4rem;
  }
`;

export const AboveTitle = styled.span`
  display: flex;
  align-items: center;

  font-weight: 200;
  font-size: 1.5rem;
  line-height: 8px;
  color: #656d72;
  text-transform: uppercase;
`;

export const StyledTitle = styled.h2`
  ${Title};

  margin-bottom: 5rem;

  font-size: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 3.25rem;
  }
`;

export const Article = styled.article`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5vh;

  max-width: 50vw;
  font-size: 1.75rem;

  @media screen and (max-width: 768px) {
    max-width: 90vw;

    font-size: 1.5rem;
  }
`;

export const SocialGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    button {
      display: none;
    }
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;

    align-self: center;
  }
`;
