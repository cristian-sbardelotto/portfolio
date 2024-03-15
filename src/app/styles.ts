import styled from 'styled-components';
import { Title } from '@/styles/utils';

import Image from 'next/image';

export const Container = styled.main`
  width: 100%;
  padding: 0 5vw;
  margin-top: 8vh;

  display: flex;
  justify-content: space-around;

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
  }

  .image-group {
    align-items: center;
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

  width: 490px;

  border-right: 3px solid;
  white-space: nowrap;
  animation: typing 3.5s steps(21), blink 0.8s infinite alternate;
  overflow: hidden;

  @media screen and (max-width: 1440px) {
    width: 370px;

    h2 {
      font-size: 3.75rem !important;
    }
  }

  @media screen and (max-width: 768px) {
    width: 270px;

    h2 {
      font-size: 2.75rem !important;
    }
  }

  h2 {
    ${Title};
    font-size: 5rem;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 60ch;
  font-size: 1.8rem;
  line-height: 150%;

  p {
    color: ${({ theme }) => theme.colors.altText};

    span {
      color: ${({ theme }) => theme.colors.text};
    }

    a {
      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.colors.alt};

      svg {
        transition: 0.2s transform;
      }

      &:hover {
        text-decoration: underline;

        svg {
          transform: translateX(1rem);
        }
      }
    }
  }

  .p-about-me {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    gap: 1.5rem;
  }
`;

export const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse !important;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;

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

  @media screen and (max-width: 768px) {
    flex-direction: column;

    div {
      padding: 0 3rem;

      flex-direction: column;
      align-items: center;
      gap: 2rem;

      h2 {
        font-size: 4rem;
      }

      h3 {
        font-size: 1.5rem;
      }

      button {
        width: 150px;
        height: 40px;
        font-size: 1.3rem;
      }
    }

    img {
      width: 200px;
      height: 200px;
    }
  }
`;
