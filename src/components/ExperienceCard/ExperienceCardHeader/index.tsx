import { ReactNode } from 'react';
import Image from 'next/image';

import { Line } from '@/components/Line';

import * as S from './styles';

type ExperienceCardHeaderProps = {
  children: ReactNode;
  image: string;
};

export function ExperienceCardHeader({
  children,
  image,
}: ExperienceCardHeaderProps) {
  return (
    <S.Container>
      <Line />

      <Image
        src={image}
        alt='Picture of the company/person'
        width={50}
        height={50}
      />

      <h3>{children}</h3>
    </S.Container>
  );
}

