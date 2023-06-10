import Link from 'next/link';

import { Home } from 'lucide-react';
import { SocialLinks } from '../SocialLinks';
import * as S from './styles';

export function Footer() {
  return (
    <S.Footer>
      <p>© 2022 - Cristian Sbardelotto</p>

      <SocialLinks />

      <button>
        <Link href='/'>
          <Home />
        </Link>
      </button>
    </S.Footer>
  );
}
