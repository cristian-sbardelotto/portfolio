/* eslint-disable indent */

import { Title } from '@/styles/utils';
import styled from 'styled-components';

import { AreaProps } from '@/types';

type ActiveAreaProps = {
  activearea: AreaProps;
};

export const Container = styled.main`
  padding: 2rem 5rem 0 5rem;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem 12rem 2rem;
  }

  > p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.altText};

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }

    &:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }

    a {
      color: ${({ theme }) => theme.colors.alt};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const TitleSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3rem;
`;

export const StyledTitle = styled.h2`
  ${Title};
`;

export const Skills = styled.ul`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-flow: row wrap;

  list-style: none;
`;

export const SkillsSection = styled.section`
  text-align: center;
  margin-bottom: 2rem;
`;

export const SkillsSectionHeader = styled.div`
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 524px) {
    flex-direction: column;
  }
`;

export const AreaSelector = styled.button<ActiveAreaProps>`
  padding: 1rem;

  font-size: 1.7rem;
  font-family: '__Inter_aaf875', sans-serif;

  color: ${({ theme, id, activearea }) =>
    activearea === id ? theme.colors.alt : theme.colors.text};

  border: 1.5px solid
    ${({ theme, id, activearea }) =>
      activearea === id ? theme.colors.alt : theme.colors.text};

  border-radius: 10px;
  background: transparent;

  cursor: pointer;

  @media screen and (max-width: 524px) {
    padding: 0;

    border: none;
  }
`;

export const Subtitle = styled.h4`
  font-size: 3.5rem;
  margin-bottom: 0.75rem;
`;

export const Languages = styled.div`
  margin-top: 2rem;

  ul {
    padding-left: 2rem;

    li {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.altText};

      b {
        color: ${({ theme }) => theme.colors.text};
      }

      @media screen and (max-width: 768px) {
        font-size: 1.25rem;
      }
    }
  }
`;
