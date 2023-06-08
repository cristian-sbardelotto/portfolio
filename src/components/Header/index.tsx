import Link from 'next/link';

import { Sun, Moon } from 'lucide-react';

import * as S from './styles';
import { DefaultTheme } from 'styled-components';

type HeaderProps = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

export function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <S.Header>
      <h1>
        <Link href='/'>
          Cristian <span>Sbardelotto</span>
        </Link>
      </h1>

      <nav>
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
        </ul>
      </nav>

      <div>
        <div>
          {theme.title === 'dark' ? (
            <Moon onClick={toggleTheme} />
          ) : (
            <Sun onClick={toggleTheme} />
          )}
        </div>

        <button>
          <Link href='/contact'>Contact</Link>
        </button>
      </div>
    </S.Header>
  );
}
