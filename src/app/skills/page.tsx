'use client';

import { SkillsList } from '@/components/SkillsList';
import { skills } from '@/data/skillsMock';

import * as S from './styles';

export default function Skills() {
  return (
    <S.Container>
      <S.StyledTitle>
        Main <span>technologies</span>
      </S.StyledTitle>

      {skills.map((skill, index) => (
        <SkillsList
          key={index}
          image={skill.image}
          name={skill.name}
        />
      ))}
    </S.Container>
  );
}
