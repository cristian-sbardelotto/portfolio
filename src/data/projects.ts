import { ProjectProps } from '@/types';

import { v4 as randomUUID } from 'uuid';

export const projects: ProjectProps[] = [
  {
    id: randomUUID(),
    title: 'Cristian OS',
    image: '/assets/projects/cristian-os.png',
    description: 'A little more about me. Also looks like Windows.',
    technologies: ['typescript', 'react', 'tailwind-css'],
    url: 'https://cristian-os.vercel.app/',
  },
  {
    id: randomUUID(),
    title: 'Studay',
    image: '/assets/projects/studay.png',
    description: 'See your homework in an organized and clean way.',
    technologies: ['typescript', 'react', 'tailwind-css'],
    url: 'https://studay-alpha.vercel.app/',
  },
  {
    id: randomUUID(),
    title: 'Quizzed!',
    image: '/assets/projects/quizzed.png',
    description:
      'Test your knowledge and try our quiz to challenge yourself! Are you really a quiz wizard?',
    technologies: ['typescript', 'react', 'tailwind-css'],
    url: 'https://quizzed-five.vercel.app/',
  },
  {
    id: randomUUID(),
    title: 'Cristian Links',
    image: '/assets/projects/cristian-links.png',
    description:
      'Minimalist and beautiful links page, where you can find my most important links and projects.',
    technologies: ['typescript', 'react', 'tailwind-css'],
    url: 'https://cristian-links.vercel.app/',
  },
  {
    id: randomUUID(),
    title: 'Portfolio',
    image: '/assets/projects/portfolio.png',
    description: 'Wait. You are already here. Then, check out the source code.',
    technologies: ['typescript', 'next.js', 'styled-components'],
    url: 'https://github.com/cristian-sbardelotto/portfolio',
  },
  {
    id: randomUUID(),
    title: 'Meme Creator',
    image: '/assets/projects/meme-creator.png',
    description:
      'Create some memes, using any image you want. After that, download the meme and send it to you friends.',
    technologies: ['typescript', 'react', 'styled-components'],
    url: 'https://meme-creator-kappa.vercel.app/',
  },
  {
    id: randomUUID(),
    title: 'QR Generator',
    image: '/assets/projects/qr-code-generator.png',
    description:
      'A simple QR Code generator that allows the user to download the image of any link that was typed.',
    technologies: ['javascript', 'react', 'css'],
    url: 'https://qr-code-generator-pied.vercel.app/',
  },
];
