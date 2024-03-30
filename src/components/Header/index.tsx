import Link from 'next/link';
import { useState } from 'react';

import { usePathname } from 'next/navigation';

import { Button } from '../Button';
import * as S from './styles';

import { AlignJustify, X } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Header>
      <h1>
        <Link href='/'>
          C <span>Sbardelotto</span>
        </Link>
      </h1>

      <S.NavLinks $ismenuopen={isMenuOpen ? 1 : 0}>
        <ul>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              className={pathname === '/about' ? 'active' : ''}
              href='/about'
            >
              About me
            </Link>
          </li>

          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              className={pathname === '/skills' ? 'active' : ''}
              href='/skills'
            >
              Skills
            </Link>
          </li>

          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              className={pathname === '/projects' ? 'active' : ''}
              href='/projects'
            >
              Projects
            </Link>
          </li>

          <li
            onClick={() => setIsMenuOpen(false)}
            className='contact-link'
          >
            <Link href='/contact'>Contact me</Link>
          </li>
        </ul>
      </S.NavLinks>

      <S.NavMenuGroup>
        <Link
          className='contact-button'
          href='/contact'
        >
          <Button variant='default'>Contact me</Button>
        </Link>

        <S.NavButton>
          {isMenuOpen ? (
            <X
              className='list-icon'
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <AlignJustify
              className='list-icon'
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </S.NavButton>
      </S.NavMenuGroup>
    </S.Header>
  );
}
