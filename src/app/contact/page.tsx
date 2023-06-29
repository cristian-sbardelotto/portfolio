'use client';

import Image from 'next/image';

import developer from 'public/images/developer.jpeg';

import { ContactLinks } from '@/components/ContactLinks';
import * as S from './styles';

export default function Contact() {
  return (
    <div>
      <S.StyledTitle>
        Contact <span>me</span>
      </S.StyledTitle>

      <S.Container>
        <Image
          src={developer}
          alt='Image of a person programming'
        />

        <ContactLinks />
      </S.Container>
    </div>
  );
}
