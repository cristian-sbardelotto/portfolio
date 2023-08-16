import { ProjectProps } from '@/types';

import imagineshop from '/public/images/imagineshop.png';
import memeCreator from '/public/images/meme-creator.png';
import nlwSpacetime from '/public/images/nlw-spacetime.png';
import qrCodeGenerator from '/public/images/qr-code-generator.png';
import studion from '/public/images/studion.png';
import todoList from '/public/images/todo-list.png';

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
      'The project is a creator of memes. The user can use an image of his own machine and customize the font color and decoration. After that, the user can also download the image. The website has light/dark themes.',
    technologies: ['typescript', 'react', 'styled-components', 'vercel'],
    githubUrl: 'https://github.com/cristian-sbardelotto/meme-creator',
    deployUrl: 'https://meme-creator-kappa.vercel.app',
  },
  {
    title: 'ImagineShop',
    image: imagineshop,
    description:
      'The project simulates an e-commerce site, that can buy items from the store with a false authentication.',
    technologies: [
      'typescript',
      'reactjs',
      'nextjs',
      'styled-components',
      'vercel',
    ],
    githubUrl: 'https://github.com/cristian-sbardelotto/imagineshop',
    deployUrl: 'https://imagineshop-frontend-topaz.vercel.app',
  },
  {
    title: 'ImagineShop API',
    image: imagineshop,
    description:
      'The project simulates an users login API, and does simple functions, like create, read, update and delete.',
    technologies: ['javascript', 'nodejs', 'mongodb', 'mongoose', 'dotenv'],
    githubUrl: 'https://github.com/cristian-sbardelotto/imagineshop-api',
  },
  {
    title: 'To Do List',
    image: todoList,
    description:
      'Simple to-do list that allows user to create, delete and mark tasks.',
    technologies: [
      'typescript',
      'reactjs',
      'styled-components',
      'vite',
      'vercel',
    ],
    githubUrl: 'https://github.com/cristian-sbardelotto/to-do-list',
    deployUrl: 'https://to-do-list-henna-three.vercel.app',
  },
  {
    title: 'QR Code Generator',
    image: qrCodeGenerator,
    description:
      'A simple QR Code generator that allows the user to download the image of any link that was typed. Idea provided by Sujeito Programador.',
    technologies: ['javascript', 'reactjs', 'qr-code', 'vite', 'vercel'],
    githubUrl: 'https://github.com/cristian-sbardelotto/qr-code-generator',
    deployUrl: 'https://qr-code-generator-pied.vercel.app/',
  },
  {
    title: 'Studion',
    image: studion,
    description: 'Page simulating an event manager, provided by Imagine School',
    technologies: [
      'html',
      'css',
      'javascript',
      'jquery',
      'slick-slider',
      'vercel',
    ],
    githubUrl: 'https://github.com/cristian-sbardelotto/studion',
    deployUrl: 'https://studion-eight.vercel.app/',
  },
  {
    title: 'Studion Backend',
    image: studion,
    description:
      'Manage and view events effortlessly. Register, list, and interact with detailed information. Efficient and flexible.',
    technologies: ['typescript', 'nodejs', 'fastify', 'prisma', 'tsx', 'jwt'],
    githubUrl: 'https://github.com/cristian-sbardelotto/studion-backend',
  },
];
