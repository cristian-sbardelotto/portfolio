'use client';

import Link from 'next/link';

import { SocialLinks } from '@/components/SocialLinks';
import { Line } from '@/components/Line';
import { Button } from '@/components/Button';
import * as S from './styles';

const date = new Date();
const currentYear = date.getFullYear();
const birthYear = 2008;

export default function Home() {
  return (
    <S.Container>
      <div>
        <S.AboveTitle>
          <Line />
          my name is
        </S.AboveTitle>

        <S.StyledTitle>
          Cristian <span>Sbardelotto</span>
        </S.StyledTitle>

        <S.Article>
          <p>
            Hey there! My name is Cristian Sbardelotto, and I am{' '}
            {currentYear - birthYear}.
          </p>
          <p>
            I started studying Web Programming in August 2022, and since then, I
            feel more and more inspired and willing to pursue my career in the
            area.
          </p>

          <p>
            My current goal is to get my first job and, in the future, become a
            Tech Lead.
          </p>

          <p>
            My main technologies are Javascript/Typescript, React, NextJS, and
            Styled-Components.
          </p>
        </S.Article>

        <S.SocialGroup>
          <SocialLinks />

          <Button>
            <Link href='/contact'>Contact me</Link>
          </Button>
        </S.SocialGroup>
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
