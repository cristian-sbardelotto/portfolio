'use client';

import Link from 'next/link';

import * as S from './styles';

import { Button } from '@/components/Button';

export default function NotFoundError() {
  return (
    <S.Error404Page>
      <div>
        <h2>404</h2>

        <div className='separator' />

        <p>This page could not be found.</p>
      </div>

      <Link href='/'>
        <Button variant='default'>Go back to home</Button>
      </Link>
    </S.Error404Page>
  );
}
