import { ProjectProps } from '@/types';

import memeCreator from '/public/images/meme-creator.png';
import nlwSpacetime from '/public/images/nlw-spacetime.png';

export const projects: ProjectProps[] = [
  {
    title: 'NLW - Spacetime',
    image: nlwSpacetime,
    description:
      'Spacetime is a Fullstack project that simulates a social network, allowing the user to upload images and add some text to publish their own memories.',
    technologies: [
      'typescript',
      'nextjs',
      'tailwind',
      'nodejs',
      'prisma',
      'fastify',
    ],
    githubUrl: 'https://github.com/cristian-sbardelotto/nlw-spacetime',
  },
  {
    title: 'Meme Creator',
    image: memeCreator,
    description:
      'A creator of memes that can be used to add texts on the image of your choice and download it.',
    technologies: ['typescript', 'react', 'styled-components'],
    githubUrl: 'https://github.com/cristian-sbardelotto/meme-creator',
    deployUrl: 'https://meme-creator-kappa.vercel.app',
  },
];
