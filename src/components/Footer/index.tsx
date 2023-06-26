import Link from 'next/link';

import { Home } from 'lucide-react';
import { SocialLinks } from '../SocialLinks';
import * as S from './styles';

export function Footer() {
  return (
    <S.Footer>
      <p>© 2023 - Cristian Sbardelotto</p>

      <SocialLinks />

      <button>
        <Link
          href='/'
          title='Go back to homepage'
        >
          <Home />
        </Link>
      </button>
    </S.Footer>
  );
}
