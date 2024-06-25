import { ProjectProps } from '@/types';

import { v4 as randomUUID } from 'uuid';

import cristianOS from '/public/assets/projects/cristian-os.svg';
import studay from '/public/assets/projects/studay.svg';
import quizzed from '/public/assets/projects/quizzed.svg';
import portfolio from '/public/assets/projects/portfolio.svg';
import memeCreator from '/public/assets/projects/meme-creator.svg';
import qrCodeGenerator from '/public/assets/projects/qr-code-generator.svg';

export const projects: ProjectProps[] = [
  {
    id: randomUUID(),
    title: 'Cristian OS',
    image: cristianOS,
    description: 'A little more about me. Also looks like Windows.',
    technologies: ['typescript', 'react', 'tailwind-css'],
    githubUrl: 'https://github.com/cristian-sbardelotto/cristian-os',
  },
  {
    id: randomUUID(),
    title: 'Studay',
    image: studay,
    description: 'See your homework in an organized and clean way.',
    technologies: ['typescript', 'react', 'tailwind-css'],
    githubUrl: 'https://github.com/cristian-sbardelotto/studay',
  },
  {
    id: randomUUID(),
    title: 'Quizzed!',
    image: quizzed,
    description:
      'Test your knowledge and try our quiz to challenge yourself! Are you really a quiz wizard?',
    technologies: ['typescript', 'react', 'tailwind-css'],
    githubUrl: 'https://github.com/cristian-sbardelotto/quizzed/',
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
    title: 'QR Generator',
    image: qrCodeGenerator,
    description:
      'A simple QR Code generator that allows the user to download the image of any link that was typed.',
    technologies: ['javascript', 'react', 'css'],
    githubUrl: 'https://github.com/cristian-sbardelotto/qr-code-generator/',
  },
];
