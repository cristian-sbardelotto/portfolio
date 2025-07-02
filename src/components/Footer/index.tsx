import Link from 'next/link';

import { SocialLinks } from '../SocialLinks';
import * as S from './styles';

export function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.FooterDescription>
          <h6>Let's work together</h6>
          <p>Ready to bring your ideas to life? Get in touch!</p>
          <span>© All rights reserved - Cristian Sbardelotto 2025</span>
        </S.FooterDescription>

        <SocialLinks />
      </S.Container>
    </S.Footer>
  );
}
