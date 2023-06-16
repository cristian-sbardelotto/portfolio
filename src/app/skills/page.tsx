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

      <S.SkillsSection>
        <S.SkillsSectionHeader>
          <S.AreaSelector
            id='frontend'
            activeArea={selectedArea}
            onClick={() => setSelectedArea('frontend')}
          >
            Frontend
          </S.AreaSelector>
          <S.AreaSelector
            id='backend'
            activeArea={selectedArea}
            onClick={() => setSelectedArea('backend')}
          >
            Backend
          </S.AreaSelector>
          <S.AreaSelector
            id='complementary'
            activeArea={selectedArea}
            onClick={() => setSelectedArea('complementary')}
          >
            Complementary
          </S.AreaSelector>
        </S.SkillsSectionHeader>

        <S.Skills>{renderAreaSkills(selectedArea)}</S.Skills>
      </S.SkillsSection>
    </S.Container>
  );
}
