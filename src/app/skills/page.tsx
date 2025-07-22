'use client';

import Link from 'next/link';

import { SkillsItem } from '@/components/SkillsItem';
import { skills } from '@/data/skills';
import * as S from './styles';

export default function Skills() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.StyledTitle>
          <span>Technologies</span> & <span>Skills</span>
        </S.StyledTitle>

        <S.InfoGroup>
          <div className='text-group'>
            <div className='copy'>
              <p>
                <span>Tip:</span> hover the technologies to get their name.
              </p>

              <p>
                Check out some of my best projects{' '}
                <Link
                  href='/projects'
                  title='My Projects'
                >
                  here
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
