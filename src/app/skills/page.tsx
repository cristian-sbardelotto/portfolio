'use client';

import { SkillsList } from '@/components/SkillsList';

import html from 'public/assets/html.svg';
import css from 'public/assets/css.svg';
import javascript from 'public/assets/javascript.svg';
import * as S from './styles';

export default function Skills() {
  const skillsArray = [
    {
      image: html,
      name: 'HTML',
    },
    {
      image: css,
      name: 'CSS',
    },
    {
      image: javascript,
      name: 'JavaScript',
    },
  ];

  return (
    <S.Container>
      <S.StyledTitle>
        Main <span>technologies</span>
      </S.StyledTitle>

      {skillsArray.map((skill, index) => (
        <SkillsList
          key={index}
          image={skill.image}
          name={skill.name}
        />
      ))}
    </S.Container>
  );
}
