'use client';

import Link from 'next/link';

import { ArrowRightIcon, DownloadIcon, MapPinIcon } from 'lucide-react';

import { Button } from '@/components/Button';
import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <div className='article'>
        <S.AboveTitle>🚀 Welcome to my portfolio</S.AboveTitle>

        <S.StyledTitle>
          <h2>
            Frontend <span>Developer</span>
          </h2>
        </S.StyledTitle>

        <S.Article>
          <p>
            My name is Cristian Sbardelotto, and I am a Web Developer that loves
            to connect with people and try new experiences. I am currently
            working at{' '}
            <a
              href='https://www.linkedin.com/company/hashcubed/'
              target='_blank'
            >
              Hash³
            </a>
            . My main stack is Typescript, NextJS, Python, and Go.
          </p>
        </S.Article>

        <S.ButtonsGroup>
          <a
            download
            href='/documents/resume.pdf'
          >
            <Button>
              <DownloadIcon /> Download CV
            </Button>
          </a>

          <Link href='/about'>
            <Button variant='outline'>
              More about me <ArrowRightIcon />
            </Button>
          </Link>
        </S.ButtonsGroup>
      </div>

      <S.ImageGroup className='image-group'>
        <S.StyledImage
          src='/images/profile.jpeg'
          alt="Cristian Sbardelotto's profile picture"
          width={325}
          height={350}
          priority
        />

        <S.ImageBadge>
          <MapPinIcon
            strokeWidth={1.5}
            size={20}
          />{' '}
          <span>SC, Brazil</span>
        </S.ImageBadge>
      </S.ImageGroup>
    </S.Container>
  );
}
