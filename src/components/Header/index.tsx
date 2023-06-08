import Link from 'next/link';

import * as S from './styles';

export function Header() {
  return (
    <S.Header>
      <h1>
        Cristian <span>Sbardelotto</span>
      </h1>

      <nav>
        <ul>
          <li>
            <Link href='/about'>About Me</Link>
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
        <span>Change theme</span>
        <button>Contact</button>
      </div>
    </S.Header>
  );
}
