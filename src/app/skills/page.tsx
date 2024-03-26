'use client';

import Link from 'next/link';

import { Button } from '@/components/Button';
import { SkillsItem } from '@/components/SkillsList';
import { skills } from '@/data/skillsMock';
import * as S from './styles';

import { GithubIcon } from 'lucide-react';

export default function Skills() {
  return (
    <S.Container>
      <S.TitleSection>
        <S.StyledTitle>
          Technologies <span>&</span> Skills
        </S.StyledTitle>

        <Link
          href='https://github.com/cristian-sbardelotto'
          target='_blank'
        >
          <Button variant='light'>
            <GithubIcon size={20} /> <p>Github</p>
          </Button>
        </Link>
      </S.TitleSection>

      <S.SkillsSection>
        <S.Skills>
          {skills.map(skill => (
            <SkillsItem
              key={skill.name}
              image={skill.image}
              name={skill.name}
            />
          ))}
        </S.Skills>
      </S.SkillsSection>

      <p>
        You can also check out some of my best/favorite projects{' '}
        <Link
          href='/projects'
          title='My Projects'
        >
          here.
        </Link>
      </p>

      <S.Languages>
        <S.Subtitle>Languages</S.Subtitle>

        <ul>
          <li>
            <span>Portuguese</span>: native.
          </li>
          <li>
            <span>English</span>: intermediate/advanced level.
          </li>
        </ul>
      </S.Languages>
    </S.Container>
  );
}
