'use client';

import Link from 'next/link';

import { GithubIcon } from 'lucide-react';

import { ProjectCard } from '@/components/ProjectCard';
import * as S from './styles';

import { projects } from '@/data/projects';
import { Button } from '@/components/Button';

export default function Projects() {
  return (
    <S.Container>
      <S.TitleGroup>
        <S.StyledTitle>
          My <span>Projects</span>
        </S.StyledTitle>

        <Link
          href='https://github.com/cristian-sbardelotto'
          target='_blank'
        >
          <Button variant='outline'>
            <GithubIcon size={20} /> <p>Github</p>
          </Button>
        </Link>
      </S.TitleGroup>

      <main>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            delay={index++ - 0.5}
            {...project}
          />
        ))}
      </main>
    </S.Container>
  );
}
