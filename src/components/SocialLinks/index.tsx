import Link from 'next/link';

import { Github, Linkedin, Phone } from 'lucide-react';
import * as S from './styles';

export function SocialLinks() {
  return (
    <S.SocialLinks>
      <li>
        <Link
          href='https://github.com/cristian-sbardelotto'
          target='_blank'
        >
          <Github />
        </Link>
      </li>
      <li>
        <Link
          href='https://linkedin.com/in/cristian-k-sbardelotto'
          target='_blank'
        >
          <Linkedin />
        </Link>
      </li>
      <li>
        <Link href='/contact'>
          <Phone />
        </Link>
      </li>
    </S.SocialLinks>
  );
}
