'use client';

import { ContactLinks } from '@/components/ContactLinks';
import * as S from './styles';

export default function Contact() {
  return (
    <S.Container>
      <S.StyledTitle>
        Contact <span>me</span>
      </S.StyledTitle>

      <S.LinksGroup>
        <S.LinksWrapper>
          <ContactLinks />
        </S.LinksWrapper>
      </S.LinksGroup>
    </S.Container>
  );
}
