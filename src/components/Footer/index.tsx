import Link from 'next/link';

import { SocialLinks } from '../SocialLinks';
import * as S from './styles';

export function Footer() {
  return (
    <S.Footer>
      <Link
        target='_blank'
        href='https://github.com/cristian-sbardelotto/'
      >
        Cristian Sbardelotto
      </Link>

      <SocialLinks />
    </S.Footer>
  );
}
