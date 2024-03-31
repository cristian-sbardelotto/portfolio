import Link from 'next/link';

import { SocialLinks } from '../SocialLinks';
import * as S from './styles';

export function Footer() {
  return (
    <S.Footer>
      <Link href='/'>Cristian Sbardelotto</Link>

      <SocialLinks />
    </S.Footer>
  );
}
