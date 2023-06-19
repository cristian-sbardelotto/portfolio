'use client';

import { ProjectCard } from '@/components/ProjectCard';
import * as S from './styles';

import html from '@/../public/assets/html.svg';

const projects = {
  title: 'Any project',
  image: html,
  description: 'nice project',
  technologies: ['nextjs', 'react', 'typescript'],
};

export default function Projects() {
  return (
    <S.Container>
      <S.StyledTitle>
        My <span>Projects</span>
      </S.StyledTitle>

      <ProjectCard {...projects} />
    </S.Container>
  );
}
