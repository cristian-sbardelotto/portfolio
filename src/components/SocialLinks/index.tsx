import Link from 'next/link';

import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import * as S from './styles';

export function SocialLinks() {
  return (
    <S.SocialLinks>
      <li>
        <Link
          href='https://github.com/cristian-sbardelotto'
          target='_blank'
          title='My Github'
        >
          <Github />
        </Link>
      </li>
      <li>
        <Link
          href='https://linkedin.com/in/cristian-k-sbardelotto'
          target='_blank'
          title='My LinkedIn'
        >
          <Linkedin />
        </Link>
      </li>
      <li>
        <Link
          href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cristian.k.sbardelotto@gmail.com'
          target='_blank'
          title='Send me an email'
        >
          <Mail />
        </Link>
      </li>
      <li>
        <Link
          href='/contact'
          title='Contact me'
        >
          <Phone />
        </Link>
      </li>
    </S.SocialLinks>
  );
}
