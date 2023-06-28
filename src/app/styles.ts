import styled from 'styled-components';
import { Title } from '@/styles/utils';

import Image from 'next/image';

export const Container = styled.main`
  width: 100%;
  padding: 0 5vw;
  margin: 8vh 0 12vh 0;

  display: flex;
  justify-content: space-around;

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
  }

  @media screen and (max-width: 1024px) {
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
  letter-spacing: 0.7rem;
  color: #656d72;
  text-transform: uppercase;
`;

export const StyledTitle = styled.div`
  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  width: 400px;

  border-right: 3px solid;
  white-space: nowrap;
  animation: typing 4s steps(21), blink 0.8s infinite alternate;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 325px;
  }

  h2 {
    ${Title};

    font-size: 4rem;

    @media screen and (max-width: 1024px) {
      font-size: 3.25rem;
    }
  }
`;

export const Article = styled.article`
  margin: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 3vh;

  max-width: 50vw;
  font-size: 2rem;

  p {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.alt};

    svg {
      align-self: flex-end;
      transition: 0.2s transform;
    }

    &:hover {
      text-decoration: underline;

      svg {
        transform: translateX(1rem);
      }
    }
  }

  @media screen and (max-width: 1024px) {
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

export const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    width: 100%;

    display: flex;
    justify-content: space-evenly;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;

  @media screen and (max-width: 1024px) {
    width: 250px;
    height: 250px;

    align-self: center;
  }
`;

export const Error404Page = styled.main`
  height: 70vh;

  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
  }

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
      font-size: 7rem;
      color: ${({ theme }) => theme.colors.alt};
    }

    h3 {
      font-size: 2rem;
    }

    button {
      width: 300px;
      height: 70px;
      font-size: 1.8rem;

      a {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
