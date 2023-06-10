'use client';

import Link from 'next/link';

import { Github, Linkedin } from 'lucide-react';

import * as S from './styles';

const date = new Date();
const currentYear = date.getFullYear();
const birthYear = 2008;

export default function Home() {
  return (
    <S.Container>
      <div>
        <S.AboveTitle>
          <hr />
          my name is
        </S.AboveTitle>

        <S.StyledTitle>
          Cristian <span>Sbardelotto</span>
        </S.StyledTitle>

        <S.Article>
          <p>
            Hey there! My name is Cristian Sbardelotto, and I am{' '}
            {currentYear - birthYear}.
            <br /> <br />
            I started studying Web Programming in August 2022, and since then, I
            feel more and more inspired and willing to pursue my career in the
            area.
            <br /> <br />
            My current goal is to get my first job and, in the future, become a
            Tech Lead.
            <br /> <br />
            My main technologies are Javascript/Typescript, React, NextJS, and
            Styled-Components.
          </p>
        </S.Article>

        <S.LinksList>
          <li>
            <Link
              href='https://github.com/cristian-sbardelotto'
              target='_blank'
            >
              <Github />
            </Link>
          </li>

          <li>
            <Link
              href='https://linkedin.com/in/cristian-k-sbardelotto'
              target='_blank'
            >
              <Linkedin />
            </Link>
          </li>
        </S.LinksList>
      </div>

      <S.StyledImage
        src='https://github.com/cristian-sbardelotto.png'
        alt="Cristian Sbardelotto's profile picture"
        width={300}
        height={300}
        priority={true}
      />
    </S.Container>
  );
}
