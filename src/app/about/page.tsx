'use client';

import Link from 'next/link';

import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences } from '@/data/experiences';

import { ExternalLinkIcon } from 'lucide-react';
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
            Since I embarked on my journey into the world of{' '}
            <span>web programming</span> in August 2022, I have been captivated
            by its endless possibilities. With each passing day, my{' '}
            <span>passion</span> for this field grows stronger, and I feel more
            inspired than ever.
          </p>

          <p>
            Currently, my personal quest is to secure my <span>first job</span>{' '}
            in the industry. But that's not where my ambitions end. In the
            future, I have the idea of becoming a <span>Tech Lead</span>, a role
            that encompasses not only technical knowledge but also a a
            consolidated arsenal of soft skills.
          </p>

          <div>
            And what about my <span>soft skills</span>? There we go:
            <ul>
              <li>
                <span>Commitment</span>: I'm punctual and rarely fail with
                deadlines.
              </li>

              <li>
                <span>Responsibility</span>: I admit my mistakes and take on the
                duties I can handle.
              </li>

              <li>
                <span>Proactivity</span>: I'm the first one to try to get the
                solution and contribute when possible.
              </li>

              <li>
                <span>Self Improvement</span>: I'm always finding new ways and
                ideas to boost my knowledge and experience.
              </li>
            </ul>
          </div>

          <p>
            If you want to know more about me in a fun and different way, you
            should try{' '}
            <Link
              className='os-link'
              href='https://cristian-os.vercel.app/'
              target='_blank'
            >
              Cristian OS <ExternalLinkIcon size={16} />
            </Link>
            .
          </p>
        </S.Article>
      </div>

      <section>
        <S.StyledTitle>
          My <span>experience</span>
        </S.StyledTitle>

        {experiences.map(experience => (
          <ExperienceCard.Root key={experience.id}>
            <ExperienceCard.Header
              experienceUrl={experience.company.url}
              image={experience.company.image}
            >
              {experience.name}
            </ExperienceCard.Header>

            <ExperienceCard.Info
              relatedProjects={experience.relatedProjects}
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

