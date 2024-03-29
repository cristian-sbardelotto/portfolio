import { Title, appearUp } from '@/styles/utils';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
 0% {
    box-shadow: 0 0 0 0px #fff1;
  }
  100% {
    box-shadow: 0 0 0 20px #fff0;
  }
`;

export const Container = styled.main`
  width: 100%;
  padding: 0 5vw;
  margin-top: 8vh;

  display: flex;
  justify-content: space-around;
  gap: 3rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
  }

  .article {
    opacity: 0;

    animation: ${appearUp} 0.75s;
    animation-delay: 0.75s;
    animation-fill-mode: forwards;
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

  width: 400px;

  border-right: 3px solid;
  white-space: nowrap;
  animation: typing 3.5s steps(21), blink 0.8s infinite alternate;
  overflow: hidden;

  h2 {
    ${Title};
  }

  @media screen and (max-width: 1440px) {
    width: 370px;

    h2 {
      font-size: 3.75rem !important;
    }
  }

  @media screen and (max-width: 768px) {
    width: 250px;

    h2 {
      font-size: 2.5rem !important;
    }
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
    color: ${({ theme }) => theme.colors.text};

    span {
      color: ${({ theme }) => theme.colors.lightText};
    }

    a {
      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.colors.main};

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

  opacity: 0;

  animation: ${appearUp} 0.75s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse !important;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;
  transition: scale 0.3s;
  animation: ${pulse} 2s infinite;

  &:hover {
    scale: 1.02;
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;

    align-self: center;
  }
`;
