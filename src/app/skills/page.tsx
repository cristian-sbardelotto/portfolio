'use client';

import { useState } from 'react';

import { SkillsList } from '@/components/SkillsList';
import { skills } from '@/data/skillsMock';
import * as S from './styles';

type SelectedAreaProps = 'frontend' | 'backend' | 'complementary';

function renderAreaSkills(area: SelectedAreaProps) {
  if (area === 'frontend') {
    return skills.frontend.map((skill, index) => (
      <SkillsList
        key={index}
        image={skill.image}
        name={skill.name}
      />
    ));
  }

  if (area === 'backend') {
    return skills.backend.map((skill, index) => (
      <SkillsList
        key={index}
        image={skill.image}
        name={skill.name}
      />
    ));
  }

  return skills.complementary.map((skill, index) => (
    <SkillsList
      key={index}
      image={skill.image}
      name={skill.name}
    />
  ));
}

export default function Skills() {
  const [selectedArea, setSelectedArea] =
    useState<SelectedAreaProps>('frontend');

  return (
    <S.Container>
      <S.StyledTitle>
        Technologies <span>&</span> Skills
      </S.StyledTitle>

      <section>
        <div
          className='header'
          style={{ display: 'flex', gap: '2rem' }}
        >
          <span onClick={() => setSelectedArea('frontend')}>Frontend</span>
          <span onClick={() => setSelectedArea('backend')}>Backend</span>
          <span onClick={() => setSelectedArea('complementary')}>
            Complementary
          </span>
        </div>

        <div className='body'>
          <S.Skills>{renderAreaSkills(selectedArea)}</S.Skills>
        </div>
      </section>
    </S.Container>
  );
}
