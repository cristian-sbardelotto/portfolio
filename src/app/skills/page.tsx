'use client';

import Image from 'next/image';

import html from 'public/assets/html.svg';
import css from 'public/assets/css.svg';
import javascript from 'public/assets/javascript.svg';
import * as S from './styles';

export default function Skills() {
  return (
    <S.Container>
      <div>
        <S.StyledTitle>
          Main <span>technologies</span>
        </S.StyledTitle>

        <ul>
          <li>
            <Image
              src={html}
              alt=''
              width={40}
              height={40}
            />

            <span>HTML</span>
          </li>
          <li>
            <Image
              src={css}
              alt=''
              width={40}
              height={40}
            />

            <span>CSS</span>
          </li>
          <li>
            <Image
              src={javascript}
              alt=''
              width={40}
              height={40}
            />

            <span>Javascript</span>
          </li>
        </ul>
      </div>
    </S.Container>
  );
}
