import { ReactNode } from 'react';
import Link from 'next/link';

import * as S from './styles';

type ExperienceCardInfoProps = {
  children: ReactNode | string;
  experienceUrl: string;
  date: string;
};

export function ExperienceCardInfo({
  children,
  experienceUrl,
  date,
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

      <S.Span>{date}</S.Span>
    </S.Container>
  );
}
