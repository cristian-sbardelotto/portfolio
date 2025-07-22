import Link from 'next/link';
import { useState } from 'react';

import { usePathname } from 'next/navigation';

import * as S from './styles';

import { AlignJustify, X } from 'lucide-react';
import { Separator } from '../Separator';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Container>
      <S.Header>
        <h1>
          <Link href='/'>sbardelotto</Link>
        </h1>

        <S.NavLinks $ismenuopen={isMenuOpen}>
          <ul>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link
                className={pathname === '/about' ? 'active' : ''}
                href='/about'
              >
                about me
              </Link>
            </li>

            <Separator />

            <li onClick={() => setIsMenuOpen(false)}>
              <Link
                className={pathname === '/skills' ? 'active' : ''}
                href='/skills'
              >
                skills
              </Link>
            </li>

            <Separator />

            <li onClick={() => setIsMenuOpen(false)}>
              <Link
                className={pathname === '/projects' ? 'active' : ''}
                href='/projects'
              >
                projects
              </Link>
            </li>

            <Separator />

            <li onClick={() => setIsMenuOpen(false)}>
              <Link href='/contact'>contact me</Link>
            </li>
          </ul>

          <S.NavMenuGroup>
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
        </S.NavLinks>
      </S.Header>
    </S.Container>
  );
}
