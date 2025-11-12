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
    title: 'Subscript',
    image: '/assets/projects/subscript.png',
    description: 'Easily manage and track all your subscriptions.',
    technologies: ['typescript', 'react', 'tailwind-css'],
    url: 'https://subscript-iota.vercel.app/',
  },
  {
    id: randomUUID(),
    title: 'Subscript API',
    image: '/assets/projects/subscript-api.png',
    description:
      'API for Subscript: application to track all your subscriptions.',
    technologies: ['go', 'go-chi', 'postgresql'],
    url: 'https://github.com/cristian-sbardelotto/subscript-api/',
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
];
