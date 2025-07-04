'use client';

import Link from 'next/link';

import { Button } from '@/components/Button';
import { SkillsItem } from '@/components/SkillsItem';
import { skills } from '@/data/skills';
import * as S from './styles';

import { GithubIcon } from 'lucide-react';

export default function Skills() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleSection>
          <S.StyledTitle>
            <span>Technologies</span> & <span>Skills</span>
          </S.StyledTitle>

          <Link
            href='https://github.com/cristian-sbardelotto'
            target='_blank'
          >
            <Button variant='outline'>
              <GithubIcon size={20} /> <p>Github</p>
            </Button>
          </Link>
        </S.TitleSection>

        <S.InfoGroup>
          <div className='text-group'>
            <div>
              <p>
                <span>Tip:</span> hover the technologies to get their name.
              </p>

              <p>
                You can also check out some of my best/favorite projects{' '}
                <Link
                  href='/projects'
                  title='My Projects'
                >
                  here.
                </Link>
              </p>
            </div>

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
          </div>

          <S.Skills>
            {skills.map(skill => (
              <SkillsItem
                key={skill.name}
                image={skill.image}
                name={skill.name}
              />
            ))}
          </S.Skills>
        </S.InfoGroup>
      </S.Wrapper>
    </S.Container>
  );
}
