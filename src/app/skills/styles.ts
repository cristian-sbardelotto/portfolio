/* eslint-disable indent */

import { Title, appearUp } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    display: initial;
  }
`;

export const Wrapper = styled.div`
  padding: 2rem 5rem 0 5rem;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem 12rem 2rem;
  }
`;

export const TitleSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 1.5rem;
  }
`;

export const StyledTitle = styled.h2`
  ${Title};

  @media screen and (max-width: 768px) {
    font-size: 3.25rem;
  }
`;

export const InfoGroup = styled.section`
  max-width: 140rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  padding-inline: 1rem;

  opacity: 0;

  animation: ${appearUp} 0.75s;
  animation-delay: 0.75s;
  animation-fill-mode: forwards;

  .text-group {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
      font-size: 1.75rem;
      color: ${({ theme }) => theme.colors.text};

      span {
        color: ${({ theme }) => theme.colors.lightText};
      }

      @media screen and (max-width: 768px) {
        font-size: 1.5rem;
      }

      a {
        color: ${({ theme }) => theme.colors.main};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Skills = styled.ul`
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 2rem;
  justify-self: center;

  list-style: none;

  @media screen and (max-width: 1024px) {
    margin-top: 1.5rem;

    display: flex;
    flex-wrap: wrap;
  }
`;

export const Subtitle = styled.h4`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 0.75rem;
`;

export const Languages = styled.div`
  margin-top: 2rem;

  opacity: 0;

  animation: ${appearUp} 0.75s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;

  ul {
    margin-top: 2rem;
    padding-left: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      font-size: 1.75rem;
      color: ${({ theme }) => theme.colors.text};

      span {
        color: ${({ theme }) => theme.colors.lightText};
      }

      @media screen and (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }
`;
