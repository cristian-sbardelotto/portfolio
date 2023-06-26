import Link from 'next/link';
import { useState } from 'react';

import { Button } from '../Button';

import { Sun, Moon, AlignJustify, X } from 'lucide-react';

import { DefaultTheme } from 'styled-components';
import * as S from './styles';

type HeaderProps = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

export function Header({ theme, toggleTheme }: HeaderProps) {
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
          {isMenuOpen === 'true' && window.innerWidth < 768 && (
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

        <Button>
          <Link href='/contact'>Contact</Link>
        </Button>

        <S.NavButton>
          {isMenuOpen === 'true' ? (
            <X onClick={() => setIsMenuOpen('false')} />
          ) : (
            <AlignJustify onClick={() => setIsMenuOpen('true')} />
          )}
        </S.NavButton>
      </S.NavMenuGroup>
    </S.Header>
  );
}
