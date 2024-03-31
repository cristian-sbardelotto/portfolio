import { ProjectProps } from '@/types';

import { v4 as randomUUID } from 'uuid';

import portfolio from '/public/assets/projects/portfolio.svg';
import memeCreator from '/public/assets/projects/meme-creator.svg';
import imagineshop from '/public/assets/projects/imagineshop.svg';
import todoList from '/public/assets/projects/todo-list.svg';
import cristianOS from '/public/assets/projects/cristian-os.svg';
import qrCodeGenerator from '/public/assets/projects/qr-code-generator.svg';

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
    title: 'Portfolio',
    image: portfolio,
    description: 'Wait. You are already here. Then, check out the source code.',
    technologies: ['typescript', 'next.js', 'styled-components'],
    githubUrl: 'https://github.com/cristian-sbardelotto/portfolio',
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
    title: 'To Do List',
    image: todoList,
    description:
      'Simple to-do list that allows user to create, delete and mark tasks.',
    technologies: ['typescript', 'react', 'styled-components'],
    githubUrl: 'https://github.com/cristian-sbardelotto/to-do-list',
  },
  {
    id: randomUUID(),
    title: 'ImagineShop',
    image: imagineshop,
    description:
      'The project simulates an e-commerce website, where you can buy items from the store with a false authentication.',
    technologies: ['typescript', 'next.js', 'styled-components'],
    githubUrl: 'https://github.com/cristian-sbardelotto/imagineshop/',
  },
  {
    id: randomUUID(),
    title: 'QR Generator',
    image: qrCodeGenerator,
    description:
      'A simple QR Code generator that allows the user to download the image of any link that was typed.',
    technologies: ['javascript', 'react', 'css'],
    githubUrl: 'https://github.com/cristian-sbardelotto/qr-code-generator/',
  },
];
