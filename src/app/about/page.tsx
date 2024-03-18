'use client';

import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences } from '@/data/experiencesMock';

import * as S from './styles';

export default function About() {
  return (
    <S.Container>
      <div>
        <S.StyledTitle>
          About <span>me</span>
        </S.StyledTitle>

        <S.Article>
          <p>
            Since I embarked on my journey into the world of web programming in
            August 2022, I have been captivated by its endless possibilities.
            With each passing day, my passion for this field grows stronger, and
            I feel more inspired than ever.
          </p>

          <p>
            Currently, my personal quest is to secure my first job in the
            industry. But that's not where my ambitions end. In the future, I
            have the idea of becoming a Tech Lead, a role that encompasses not
            only technical knowledge but also soft skills.
          </p>

          <p>
            To maintain a strong foundation in web programming, I always
            challenge myself and seek valuable learning opportunities. Armed
            with this knowledge and a desire for continuous improvement, I am
            excited to keep expanding my skills and taking on new challenges. I
            believe that with dedication, perseverance, and a continuous thirst
            for knowledge, I can achieve my goals in the world of programming.
          </p>
        </S.Article>
      </div>

      <section>
        <S.StyledTitle>
          My <span>experience</span>
        </S.StyledTitle>

        {experiences.map(experience => (
          <ExperienceCard.Root key={experience.id}>
            <ExperienceCard.Header image={experience.company.image}>
              {experience.name}
            </ExperienceCard.Header>

            <ExperienceCard.Info
              duration={experience.duration}
              experienceUrl={experience.company.url}
            >
              {experience.company.name}
            </ExperienceCard.Info>

            <ExperienceCard.Description>
              {experience.description}
            </ExperienceCard.Description>
          </ExperienceCard.Root>
        ))}
      </section>
    </S.Container>
  );
}
