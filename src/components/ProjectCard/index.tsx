import Image from 'next/image';
import Link from 'next/link';

import { ProjectProps } from '@/types';

import * as S from './styles';

export function ProjectCard({
  title,
  image,
  description,
  technologies,
  githubUrl,
}: ProjectProps) {
  return (
    <S.Container>
      <S.ImageGroup>
        <Link
          href={githubUrl}
          target='_blank'
        >
          <Image
            src={image}
            alt={`${title} Project Card`}
          />
        </Link>
      </S.ImageGroup>

      <h4>
        <Link
          href={githubUrl}
          target='_blank'
        >
          {title}
        </Link>
      </h4>

      <S.TechnologiesGroup>
        {technologies.map(technology => (
          <span key={technology}>{technology}</span>
        ))}
      </S.TechnologiesGroup>

      <p>{description}</p>
    </S.Container>
  );
}
