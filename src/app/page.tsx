'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import nextjs from '@/../public/assets/nextjs.svg';
import nodejs from '@/../public/assets/nodejs.svg';
import typescript from '@/../public/assets/typescript.svg';
import windows from '@/../public/assets/windows.svg';

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
              here <ChevronRight />
            </Link>
          </p>
        </S.Article>

        <S.SocialGroup>
          <SocialLinks />

          <a
            download
            href='/documents/resume.pdf'
          >
            <Button>Download CV</Button>
          </a>
        </S.SocialGroup>
      </div>

      <S.ImageGroup>
        <S.StyledImage
          src='https://github.com/cristian-sbardelotto.png'
          alt="Cristian Sbardelotto's profile picture"
          width={300}
          height={300}
          priority={true}
        />

        <div>
          <Image
            src={typescript}
            alt='Typescript Logo'
            title='Typescript'
            height={40}
            width={40}
          />

          <Image
            src={nextjs}
            alt='Next.js Logo'
            title='Next.js'
            height={40}
            width={40}
          />

          <Image
            src={nodejs}
            alt='Node.js Logo'
            title='Node.js'
            height={40}
            width={40}
          />

          <Image
            src={windows}
            alt='Windows Logo'
            title='Windows'
            height={40}
            width={40}
          />
        </div>
      </S.ImageGroup>
    </S.Container>
  );
}
