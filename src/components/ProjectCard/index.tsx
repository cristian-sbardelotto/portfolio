import Image from 'next/image';
import Link from 'next/link';

import { GithubIcon, Rocket } from 'lucide-react';

import { ProjectProps } from '@/types';

import * as S from './styles';

export function ProjectCard({
  title,
  image,
  description,
  technologies,
  githubUrl,
  deployUrl,
}: ProjectProps) {
  return (
    <S.Container>
      <S.ImageGroup>
        <Image
          src={image}
          alt={`${title} Project Card`}
        />

        <div>
          <Link
            href={githubUrl}
            target='_blank'
            title='Go see the project on Github'
          >
            <GithubIcon />
          </Link>

          {deployUrl && (
            <Link
              href={deployUrl}
              target='_blank'
              title='Go see the project on Web'
            >
              <Rocket />
            </Link>
          )}
        </div>
      </S.ImageGroup>

      <section>
        <h4>{title}</h4>

        <p>{description}</p>

        <S.TechnologiesGroup>
          {technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </S.TechnologiesGroup>
      </section>
    </S.Container>
  );
}
