import { ReactNode } from 'react';
import Link from 'next/link';

import { RelatedProject } from '@/types';

import { ExternalLinkIcon } from 'lucide-react';
import * as S from './styles';

type ExperienceCardInfoProps = {
  children: ReactNode | string;
  experienceUrl: string;
  duration: string;
  relatedProjects?: RelatedProject[];
};

export function ExperienceCardInfo({
  children,
  experienceUrl,
  duration,
  relatedProjects,
}: ExperienceCardInfoProps) {
  return (
    <S.Container>
      <S.Span>
        <Link
          href={experienceUrl}
          target='_blank'
          title={children?.toString()}
        >
          {children}
        </Link>
      </S.Span>

      <S.Span>{duration}</S.Span>

      {relatedProjects && (
        <S.RelatedProjects>
          <span>Related projects: </span>
          {relatedProjects.map(project => (
            <Link
              key={project.id}
              href={project.url}
              target='_blank'
            >
              {project.name} <ExternalLinkIcon size={16} />
            </Link>
          ))}
        </S.RelatedProjects>
      )}
    </S.Container>
  );
}
