import Link from 'next/link';

import * as S from './styles';

export function Header() {
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
        <span>Change theme</span>
        <button>
          <Link href='/contact'>Contact</Link>
        </button>
      </div>
    </S.Header>
  );
}
