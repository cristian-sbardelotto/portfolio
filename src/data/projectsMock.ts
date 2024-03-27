import { ProjectProps } from '@/types';

import { v4 as randomUUID } from 'uuid';

import portfolio from '/public/assets/projects/portfolio.svg';
import memeCreator from '/public/assets/projects/meme-creator.svg';
import studionBackend from '/public/assets/projects/studion-backend.svg';
import todoList from '/public/assets/projects/todo-list.svg';
import cristianOS from '/public/assets/projects/cristian-os.svg';
import devPolls from '/public/assets/projects/dev-polls.svg';

export const projects: ProjectProps[] = [
  {
    id: randomUUID(),
    title: 'Cristian OS',
    image: cristianOS,
    description: 'A little more about me. Also looks like Windows.',
    technologies: ['typescript', 'react', 'tailwind'],
    githubUrl: 'https://github.com/cristian-sbardelotto/cristian-os',
  },
  {
    id: randomUUID(),
    title: 'Meme Creator',
    image: memeCreator,
    description:
      'Create some memes, using any image you want. After that, download the meme and send it to you friends.',
    technologies: ['typescript', 'react', 'styled-components'],
    githubUrl: 'https://github.com/cristian-sbardelotto/meme-creator',
  },
  {
    id: randomUUID(),
    title: 'Portfolio',
    image: portfolio,
    description: 'Wait. You are already here. Then, check out the source code.',
    technologies: ['typescript', 'nextjs', 'styled-components'],
    githubUrl: 'https://github.com/cristian-sbardelotto/portfolio',
  },
  {
    id: randomUUID(),
    title: 'To Do List',
    image: todoList,
    description:
      'Simple to-do list that allows user to create, delete and mark tasks.',
    technologies: ['typescript', 'react', 'styled-components'],
    githubUrl: 'https://github.com/cristian-sbardelotto/to-do-list',
  },
  {
    id: randomUUID(),
    title: 'Studion Backend',
    image: studionBackend,
    description:
      'Manage and view events effortlessly. Register, list, and interact with detailed information. Efficient and flexible.',
    technologies: ['typescript', 'nodejs', 'fastify', 'prisma'],
    githubUrl: 'https://github.com/cristian-sbardelotto/studion-backend',
  },
  {
    id: randomUUID(),
    title: 'Dev Polls',
    image: devPolls,
    description:
      'Vote in any poll you choose, and view the voting progression in real time. Made in the NLW Expert.',
    technologies: ['typescript', 'nodejs', 'fastify', 'prisma'],
    githubUrl: 'https://github.com/cristian-sbardelotto/dev-polls',
  },
];
