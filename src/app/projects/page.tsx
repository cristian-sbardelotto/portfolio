'use client';

import { ProjectCard } from '@/components/ProjectCard';
import * as S from './styles';

import memeCreator from '@/../public/images/meme-creator.png';

const projects = {
  title: 'Any project',
  image: memeCreator,
  description: 'Nice project description',
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
