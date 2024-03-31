import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Line } from '@/components/Line';

import * as S from './styles';

type ExperienceCardHeaderProps = {
  children: ReactNode;
  image: string;
  experienceUrl: string;
};

export function ExperienceCardHeader({
  children,
  image,
  experienceUrl,
}: ExperienceCardHeaderProps) {
  return (
    <S.Container>
      <Line />

      <Link
        href={experienceUrl}
        target='_blank'
      >
        <Image
          src={image}
          alt='Picture of the company/person'
          width={50}
          height={50}
        />
      </Link>

      <h3>{children}</h3>
    </S.Container>
  );
}
