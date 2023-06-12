'use client';

import { ExperienceCard } from '@/components/ExperienceCard';
import * as S from './styles';

export default function About() {
  return (
    <S.Container>
      <div>
        <S.SytledTitle>
          About <span>me</span>
        </S.SytledTitle>

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
        <S.SytledTitle>
          My <span>experience</span>
        </S.SytledTitle>

        <ExperienceCard
          title='Curso de Javascript'
          image='https://github.com/cursoemvideo.png'
          teacher='Gustavo Guanabara'
          teacherProfile='https://www.instagram.com/gustavoguanabara/'
        >
          One notable course I completed was the Javascript course taught by
          Gustavo Guanabara, an experienced and renowned instructor in the
          field, known for his incredible teaching methodology. This course
          provided me with a comprehensive understanding of Javascript, which
          also covered programming logic, helping me develop dynamic and
          interactive websites.
        </ExperienceCard>

        <ExperienceCard
          title='Curso de FullStack Developer'
          image='https://media.eadbox.com/system/uploads/saas/toolbar_logo/5cb73db87ec70e00217d02c9/icone_escola.jpg'
          teacher='Imagine School'
          teacherProfile='https://imagineschool.com.br/'
        >
          Another experience I had was the FullStack course at Imagine School,
          which greatly complemented my learning in both front-end and back-end
          development. During the course, I had the rewarding opportunity to act
          as a student monitor, where I was responsible for supporting the
          course students by answering their questions and guiding them through
          their difficulties. This experience significantly helped me build my
          communication, mentoring, and public speaking skills.
        </ExperienceCard>
      </section>
    </S.Container>
  );
}
