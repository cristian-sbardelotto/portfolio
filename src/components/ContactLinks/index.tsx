import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../Button';

import * as S from './styles';
import { contactLinks } from './constants';

export function ContactLinks() {
  return (
    <S.Container>
      {contactLinks.map(item => (
        <li key={item.name}>
          <Link
            href={item.url}
            target='_blank'
            download={
              item.name === 'Resume' ? 'cristian-sbardelotto-cv.pdf' : false
            }
          >
            <Button
              variant='dark'
              className='gray'
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={48}
                height={48}
              />
              <span>{item.name}</span>
            </Button>
          </Link>
        </li>
      ))}
    </S.Container>
  );
}
