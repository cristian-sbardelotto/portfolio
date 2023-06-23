'use client';

import Image from 'next/image';

import developer from 'public/images/developer.jpeg';

import { ContactLinks } from '@/components/ContactLinks';
import * as S from './styles';

export default function Contact() {
  return (
    <S.Container>
      <S.StyledTitle>
        Contact <span>me</span>
      </S.StyledTitle>

      <main>
        <Image
          src={developer}
          alt='Image of a person programming'
        />

        <section>
          <ContactLinks />
        </section>
      </main>
    </S.Container>
  );
}
