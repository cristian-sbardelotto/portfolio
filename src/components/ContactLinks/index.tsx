import Link from 'next/link';

import { MessageCircle, Github, Linkedin, Mail } from 'lucide-react';

import * as S from './styles';

export function ContactLinks() {
  return (
    <S.List>
      <li>
        <Link
          href='https://api.whatsapp.com/send?phone=5551996380154'
          target='_blank'
        >
          <MessageCircle />
          <span>WhatsApp</span>
        </Link>
      </li>
      <li>
        <Link
          href='https://github.com/cristian-sbardelotto'
          target='_blank'
        >
          <Github />
          <span>github.com/cristian-sbardelotto</span>
        </Link>
      </li>
      <li>
        <Link
          href='https://linkedin.com/in/cristian-k-sbardelotto'
          target='_blank'
        >
          <Linkedin />
          <span>linkedin.com/in/cristian-k-sbardelotto</span>
        </Link>
      </li>
      <li>
        <Link
          href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cristian.k.sbardelotto@gmail.com'
          target='_blank'
        >
          <Mail />
          <span>cristian.k.sbardelotto@gmail.com</span>
        </Link>
      </li>
    </S.List>
  );
}
