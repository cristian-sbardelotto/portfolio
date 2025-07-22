import Image from 'next/image';
import Link from 'next/link';

import { ProjectProps } from '@/types';

import { ExternalLinkIcon } from 'lucide-react';
import * as S from './styles';

export function ProjectCard({
  title,
  image,
  description,
  technologies,
  delay = 0,
  url,
}: ProjectProps & { delay?: number }) {
  return (
    <S.Container style={{ animationDelay: `${delay}s` }}>
      <S.ImageGroup>
        <Link
          href={url}
          target='_blank'
        >
          <Image
            src={image}
            alt={`${title} Project Card`}
            width={1000}
            height={1000}
          />
        </Link>
      </S.ImageGroup>

      <h4>
        <Link
          href={url}
          target='_blank'
        >
          {title}

          <ExternalLinkIcon />
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
