'use client';

import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

import astronaut from '@/../public/assets/astronaut.svg';
import { Button } from '@/components/Button';

export default function NotFoundError() {
  return (
    <S.Error404Page>
      <Image
        src={astronaut}
        alt='Image of an astronaut on a rocket'
      />
      <div>
        <h2>404</h2>

        <h3>Oops! It looks like you've accessed a page that doesn't exist.</h3>

        <Button>
          <Link href='/'>Go back to home</Link>
        </Button>
      </div>
    </S.Error404Page>
  );
}
