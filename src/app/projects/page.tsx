'use client';

import { ProjectCard } from '@/components/ProjectCard';
import * as S from './styles';

import { projects } from '@/data/projectsMock';

export default function Projects() {
  return (
    <S.Container>
      <S.StyledTitle>
        My <span>Projects</span>
      </S.StyledTitle>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
        />
      ))}
    </S.Container>
  );
}
