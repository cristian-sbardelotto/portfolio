import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { GithubIcon, Rocket } from 'lucide-react';

import * as S from './styles';

type ProjectCardProps = {
  title: string;
  image: string | StaticImageData;
  description: string;
  technologies: string[];
  githubUrl: string;
  deployUrl?: string;
};

export function ProjectCard({
  title,
  image,
  description,
  technologies,
  githubUrl,
  deployUrl,
}: ProjectCardProps) {
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
          >
            <GithubIcon />
          </Link>

          {deployUrl && (
            <Link
              href={deployUrl}
              target='_blank'
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
