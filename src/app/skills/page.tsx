'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AreaProps } from '@/types';

import usa from '@/../public/assets/usa.svg';

import { SkillsList } from '@/components/SkillsList';
import { skills } from '@/data/skillsMock';
import * as S from './styles';

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

  if (area === 'frontend') return frontendSkills;

  if (area === 'backend') return backendSkills;

  return complementarySkills;
}

export default function Skills() {
  const [selectedArea, setSelectedArea] = useState<AreaProps>('frontend');

  return (
    <S.Container>
      <S.StyledTitle>
        Technologies <span>&</span> Skills
      </S.StyledTitle>

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
        You can{' '}
        <Link
          href='https://github.com/cristian-sbardelotto'
          target='_blank'
        >
          visit my Github
        </Link>{' '}
        to check out all my projects, or view some of my{' '}
        <Link href='/projects'>best/favorite projects here.</Link>
      </p>

      <p>
        <Image
          src={usa}
          alt='United States Flag Image'
          width={30}
          height={30}
        />
        I am Brazilian, but I am constantly in contact with English, so I can
        communicate, read, listen and understand both in English and Portuguese.
      </p>
    </S.Container>
  );
}
