import styled from 'styled-components';
import { Title } from '@/styles/utils/title';

import Image from 'next/image';

export const Container = styled.main`
  width: 100vw;

  display: flex;
  justify-content: space-around;

  margin-top: 10vh;

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
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

  hr {
    width: 1rem;
    display: inline-block;
    margin-right: 1rem;
  }
`;

export const StyledTitle = styled.h2`
  ${Title};

  font-size: 4rem;
`;

export const Article = styled.article`
  max-width: 45vw;
  font-size: 1.5rem;
`;

export const LinksList = styled.ul`
  display: flex;
  gap: 2rem;

  list-style: none;

  li a svg {
    transition: 0.2s color;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.alt};
    }
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;
`;
