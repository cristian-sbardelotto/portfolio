import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Line } from '../Line';
import * as S from './styles';

type ExperienceCardProps = {
  title: string;
  image: string;
  teacher: string;
  teacherProfile: string;
  children: React.ReactNode;
};

export function ExperienceCard({
  title,
  image,
  teacher,
  teacherProfile,
  children,
}: ExperienceCardProps) {
  return (
    <S.Container>
      <S.CardHeader>
        <Line />

        <Image
          src={image}
          alt={`${teacher}'s personal/company picture`}
          width={50}
          height={50}
        />

        <h3>{title}</h3>
      </S.CardHeader>

      <S.CardBody>
        <span>
          Teacher:{' '}
          <Link
            href={teacherProfile}
            target='_blank'
          >
            {teacher}
          </Link>
        </span>

        <p>{children}</p>
      </S.CardBody>
    </S.Container>
  );
}
