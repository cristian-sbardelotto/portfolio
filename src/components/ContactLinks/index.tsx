import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../Button';

import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import discordIcon from 'public/assets/discord.svg';
import * as S from './styles';

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
          href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cristian.k.sbardelotto@gmail.com'
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
        <a
          download
          href='/documents/resume.pdf'
        >
          <Button variant='dark'>
            <FileText size={22} /> Download Resume
          </Button>
        </a>
      </li>

      <li style={{ animationDelay: '2.75s' }}>
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
