import Link from 'next/link';

import { Button } from '../Button';

import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import discordIcon from 'public/assets/discord.svg';
import * as S from './styles';
import Image from 'next/image';

export function ContactLinks() {
  return (
    <S.Container>
      <li style={{ animationDelay: '0.75s' }}>
        <Link
          href='https://github.com/cristian-sbardelotto'
          target='_blank'
        >
          <Button
            variant='dark'
            className='gray'
          >
            <Github size={22} /> Github
          </Button>
        </Link>
      </li>

      <li style={{ animationDelay: '1.25s' }}>
        <Link
          href='https://linkedin.com/in/cristian-k-sbardelotto/'
          target='_blank'
        >
          <Button
            variant='dark'
            className='light-blue'
          >
            <Linkedin size={22} /> LinkedIn
          </Button>
        </Link>
      </li>

      <li style={{ animationDelay: '1.75s' }}>
        <Link
          href='mailto:cristian.k.sbardelotto@gmail.com'
          target='_blank'
        >
          <Button
            variant='dark'
            className='red'
          >
            <Mail size={22} /> Email
          </Button>
        </Link>
      </li>

      <li style={{ animationDelay: '2.25s' }}>
        <Link
          href='https://api.whatsapp.com/send?phone=5551996380154'
          target='_blank'
        >
          <Button
            variant='dark'
            className='green'
          >
            <Phone size={22} /> WhatsApp
          </Button>
        </Link>
      </li>

      <li style={{ animationDelay: '2.75s' }}>
        <a
          download
          href='/documents/resume.pdf'
        >
          <Button variant='dark'>
            <FileText size={22} /> Download Resume
          </Button>
        </a>
      </li>

      <li style={{ animationDelay: '3.25s' }}>
        <Link
          href='https://discord.com/users/669660510093967371'
          target='_blank'
        >
          <Button variant='dark'>
            <Image
              src={discordIcon}
              alt='Discord Icon'
              className='dark-blue'
              width={22}
              height={22}
            />{' '}
            <span className='dark-blue'>Discord</span>
          </Button>
        </Link>
      </li>
    </S.Container>
  );
}
