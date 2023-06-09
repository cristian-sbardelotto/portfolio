import Link from 'next/link';

import { Sun, Moon, AlignJustify, X } from 'lucide-react';

import * as S from './styles';
import { DefaultTheme } from 'styled-components';
import { useState } from 'react';

type HeaderProps = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

export function Header({ theme, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Header>
      <h1>
        <Link href='/'>
          Cristian <span>Sbardelotto</span>
        </Link>
      </h1>

      <S.NavLinks isMenuOpen={isMenuOpen}>
        <ul>
          <li>
            <Link href='/about'>About me</Link>
          </li>
          <li>
            <Link href='/skills'>Skills</Link>
          </li>
          <li>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
          {isMenuOpen && window.innerWidth < 768 && (
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          )}
        </ul>
      </S.NavLinks>

      <S.NavMenuGroup>
        {theme.title === 'dark' ? (
          <Moon onClick={toggleTheme} />
        ) : (
          <Sun onClick={toggleTheme} />
        )}

        <S.ContactButton>
          <Link href='/contact'>Contact</Link>
        </S.ContactButton>

        <S.NavButton>
          {isMenuOpen ? (
            <X onClick={() => setIsMenuOpen(false)} />
          ) : (
            <AlignJustify onClick={() => setIsMenuOpen(true)} />
          )}
        </S.NavButton>
      </S.NavMenuGroup>
    </S.Header>
  );
}
