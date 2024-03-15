'use client';

import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/Button';
import { Line } from '@/components/Line';
import { SocialLinks } from '@/components/SocialLinks';
import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <div>
        <S.AboveTitle>
          <Line />i am a
        </S.AboveTitle>

        <S.StyledTitle>
          <h2>
            FullStack <span>Developer</span>
          </h2>
        </S.StyledTitle>

        <S.Article>
          <p>Hey there! My name is Cristian Sbardelotto.</p>
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
            My main technologies are Javascript/Typescript, React, NextJS,
            Styled-Components, NodeJS and Prisma + Fastify.
          </p>

          <p>
            Know more about me{' '}
            <Link href='/about'>
              here <ChevronRight size={18} />
            </Link>
          </p>
        </S.Article>

        <S.SocialGroup>
          <a
            download
            href='/documents/resume.pdf'
          >
            <Button>Download CV</Button>
          </a>
        </S.SocialGroup>
      </div>

      <S.ImageGroup className='image-group'>
        <S.StyledImage
          src='https://github.com/cristian-sbardelotto.png'
          alt="Cristian Sbardelotto's profile picture"
          width={300}
          height={300}
          priority={true}
        />

        <SocialLinks />
      </S.ImageGroup>
    </S.Container>
  );
}
