'use client';

import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/Button';
import { Line } from '@/components/Line';
import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <div className='article'>
        <S.AboveTitle>
          <Line />i am a
        </S.AboveTitle>

        <S.StyledTitle>
          <h2>
            Frontend <span>Developer</span>
          </h2>
        </S.StyledTitle>

        <S.Article>
          <p>
            Hi! My name is <span>Cristian Sbardelotto</span>.
          </p>

          <p>
            I started studying <span>Web Programming</span> in August 2022, and
            since then, I feel more and more <span>inspired and willing</span>{' '}
            to pursue my career in the area.
          </p>

          <p>
            My current <span>goal</span> is to get my first job and, in the
            future, become a <span>Tech Lead</span>.
          </p>

          <p>
            My main stack is{' '}
            <span>
              HTML, CSS, Javascript, Typescript, React, NextJS, TailwindCSS,
              Styled-components
            </span>
            .
          </p>

          <p className='p-about-me'>
            Know more about me{' '}
            <Link href='/about'>
              here <ChevronRight size={18} />
            </Link>
          </p>
        </S.Article>

        <a
          download
          href='/documents/resume.pdf'
        >
          <Button variant='light'>Download CV</Button>
        </a>
      </div>

      <S.ImageGroup className='image-group'>
        <S.StyledImage
          src='https://github.com/cristian-sbardelotto.png'
          alt="Cristian Sbardelotto's profile picture"
          width={300}
          height={300}
          priority
        />
      </S.ImageGroup>
    </S.Container>
  );
}
