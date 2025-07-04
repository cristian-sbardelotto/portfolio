import styled from 'styled-components';
import { appearUp } from '@/styles/utils';

export const Container = styled.div`
  width: 350px;
  height: 400px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  opacity: 0;

  animation: ${appearUp} 0.75s;
  animation-fill-mode: forwards;

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
  }

  h4 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.lightText};

    a {
      display: flex;
      gap: 8px;
      align-items: center;
      color: ${({ theme }) => theme.colors.lightText};

      svg {
        display: none;
      }
    }

    &:hover {
      svg {
        display: inline-block;
      }
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 150%;
    overflow-y: auto;
  }
`;

export const TechnologiesGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  cursor: default;

  span {
    padding: 5px 10px;

    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.main}10;
    border-radius: 9999px;

    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ImageGroup = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 220px;

    background-color: #0d0d0f;
    border: ${({ theme }) => theme.borders.main};

    transition: all 0.3s;

    img {
      transition: scale 0.3s;
      width: 100%;
      height: 100%;
      object-fit: cover;
      image-rendering: optimizeQuality;
    }

    &:hover {
      box-shadow: #f974167c -5px 5px;
      cursor: pointer;
      transform: translate(0.5rem, -0.5rem);
    }
  }
`;
