'use client';

import { useState } from 'react';
import Link from 'next/link';

import { AreaProps } from '@/types';
import { Button } from '@/components/Button';
import { SkillsList } from '@/components/SkillsList';
import { skills } from '@/data/skillsMock';
import * as S from './styles';

import { GithubIcon } from 'lucide-react';

function renderAreaSkills(area: AreaProps) {
  const frontendSkills = skills.frontend.map((skill, index) => (
    <SkillsList
      key={index}
      image={skill.image}
      name={skill.name}
    />
  ));

  const backendSkills = skills.backend.map((skill, index) => (
    <SkillsList
      key={index}
      image={skill.image}
      name={skill.name}
    />
  ));

  const complementarySkills = skills.complementary.map((skill, index) => (
    <SkillsList
      key={index}
      image={skill.image}
      name={skill.name}
    />
  ));

  switch (area) {
    case 'backend':
      return backendSkills;
    case 'complementary':
      return complementarySkills;
    default:
      return frontendSkills;
  }
}

export default function Skills() {
  const [selectedArea, setSelectedArea] = useState<AreaProps>('frontend');

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
        <S.SkillsSectionHeader>
          <S.AreaSelector
            id='frontend'
            activearea={selectedArea}
            onClick={() => setSelectedArea('frontend')}
          >
            Frontend
          </S.AreaSelector>
          <S.AreaSelector
            id='backend'
            activearea={selectedArea}
            onClick={() => setSelectedArea('backend')}
          >
            Backend
          </S.AreaSelector>
          <S.AreaSelector
            id='complementary'
            activearea={selectedArea}
            onClick={() => setSelectedArea('complementary')}
          >
            Complementary
          </S.AreaSelector>
        </S.SkillsSectionHeader>

        <S.Skills>{renderAreaSkills(selectedArea)}</S.Skills>
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
            <b>Portuguese</b>: native.
          </li>
          <li>
            <b>English</b>: intermediate/advanced level.
          </li>
        </ul>
      </S.Languages>
    </S.Container>
  );
}
