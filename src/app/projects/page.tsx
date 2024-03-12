'use client';

import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { ProjectCard } from '@/components/ProjectCard';
import * as S from './styles';

import { projects } from '@/data/projectsMock';

export default function Projects() {
  return (
    <S.Container>
      <S.TitleGroup>
        <S.StyledTitle>
          My <span>Projects</span>
        </S.StyledTitle>

        <p>
          See all my projects
          <Link
            href='https://github.com/cristian-sbardelotto'
            target='_blank'
          >
            here <ChevronRight />
          </Link>
        </p>
      </S.TitleGroup>

      <main>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </main>
    </S.Container>
  );
}
