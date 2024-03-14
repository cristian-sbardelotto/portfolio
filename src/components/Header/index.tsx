import Link from 'next/link';
import { useState } from 'react';

import { Button } from '../Button';

import { AlignJustify, X } from 'lucide-react';

import * as S from './styles';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<'true' | 'false'>('false');

  return (
    <S.Header>
      <h1>
        <Link href='/'>
          Cristian <span>Sbardelotto</span>
        </Link>
      </h1>

      <S.NavLinks ismenuopen={isMenuOpen}>
        <ul>
          <li>
            <Link href='/about'>About me</Link>
          </li>

          <li>
            <Link href='/skills'>Skills</Link>
          </li>

          <li>
            <Link href='/projects'>Projects</Link>
          </li>

          <li className='contact-link'>
            <Link href='/contact'>Contact me</Link>
          </li>
        </ul>
      </S.NavLinks>

      <S.NavMenuGroup>
        <Link
          className='contact-button'
          href='/contact'
        >
          <Button>Contact me</Button>
        </Link>

        <S.NavButton>
          {isMenuOpen === 'true' ? (
            <X
              className='list-icon'
              onClick={() => setIsMenuOpen('false')}
            />
          ) : (
            <AlignJustify
              className='list-icon'
              onClick={() => setIsMenuOpen('true')}
            />
          )}
        </S.NavButton>
      </S.NavMenuGroup>
    </S.Header>
  );
}
