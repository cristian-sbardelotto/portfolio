import { v4 as randomUUID } from 'uuid';

import { RelatedProject } from '@/types';

type ExperienceProps = {
  id: string;
  name: string;
  company: {
    name: string;
    url: string;
    image: string;
  };
  duration: string;
  description: string;
  relatedProjects?: RelatedProject[];
};

export const experiences: ExperienceProps[] = [
  {
    id: randomUUID(),
    name: 'Frontend Developer',
    company: {
      name: 'Hash³',
      url: 'https://www.linkedin.com/company/hashcubed/',
      image: 'https://i.ibb.co/9VbNJq7/hashcubed-logo.jpg',
    },
    description:
      'I work with cutting-edge frontend technologies, including TypeScript, React, TailwindCSS, and shadcn/ui. My daily responsibilities involve developing new features, enhancing existing ones, refactoring code, analyzing real-world applications, and seamlessly integrating systems to ensure everything functions perfectly.',
    duration: 'Jul. 2024 - until now',
  },
  {
    id: randomUUID(),
    name: 'Frontend Developer',
    company: {
      name: 'Lab Yes!',
      url: 'https://linkedin.com/company/lab-yes/',
      image: 'https://i.ibb.co/tYN8pM9/lab-yes-logo.jpg',
    },
    description:
      'We engage in the development of web applications to address genuine client needs on a voluntary basis. In this process, I am using Javascript, React, Styled-Components, etc. This is done with the goal of gaining practical experiences covering the entire system creation process, from organization to development and finalization of advanced software solutions. We also employ agile approaches like Scrum and Kanban, in order to boost productivity and performance. This work enhances collaboration, teamwork, communication, proactivity, and other soft skills.',
    duration: 'Sep. 2023 - until now',
    relatedProjects: [
      {
        name: 'RK Imóveis LP',
        url: 'https://rklp-tom.netlify.app/',
        id: randomUUID(),
      },
    ],
  },
  {
    id: randomUUID(),
    name: 'Curso de FullStack Developer',
    company: {
      name: 'Imagine School',
      url: 'https://imagineschool.com.br',
      image:
        'https://media.eadbox.com/system/uploads/saas/toolbar_logo/5cb73db87ec70e00217d02c9/icone_escola.jpg',
    },
    duration: 'Oct. 2022 - Sep. 2023',
    description:
      'Another experience I had was the FullStack course at Imagine School, which greatly complemented my learning in both front-end and back-end development. During the course, I had the rewarding opportunity to act as a student monitor, where I was responsible for supporting the course students by answering their questions and guiding them through their difficulties. This experience significantly helped me build my communication, mentoring, and public speaking skills.',
    relatedProjects: [
      {
        name: 'Imagineshop',
        url: 'https://github.com/cristian-sbardelotto/imagineshop',
        id: randomUUID(),
      },
      {
        name: 'Imagiflix',
        url: 'https://github.com/cristian-sbardelotto/imagiflix',
        id: randomUUID(),
      },
    ],
  },
  {
    id: randomUUID(),
    name: 'Curso de Javascript',
    company: {
      name: 'Curso em Vídeo',
      url: 'https://cursoemvideo.com/',
      image: 'https://github.com/cursoemvideo.png',
    },
    duration: 'Oct. 2023',
    description:
      'One notable course I completed was the Javascript course taught by Gustavo Guanabara, an experienced and renowned instructor in the field, known for his incredible teaching methodology. This course provided me with a comprehensive understanding of Javascript, which also covered programming logic, helping me develop dynamic and interactive websites.',
  },
];
