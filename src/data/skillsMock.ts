import html from 'public/assets/html.svg';
import css from 'public/assets/css.svg';
import javascript from 'public/assets/javascript.svg';
import typescript from 'public/assets/typescript.svg';
import react from 'public/assets/react.svg';
import nextjs from 'public/assets/nextjs.svg';
import tailwind from 'public/assets/tailwindcss.svg';
import nodejs from 'public/assets/nodejs.svg';
import mongodb from 'public/assets/mongodb.svg';
import fastify from 'public/assets/fastify.svg';
import express from 'public/assets/express.svg';
import prisma from 'public/assets/prisma.svg';
import git from 'public/assets/git.svg';
import github from 'public/assets/github.svg';
import windows from 'public/assets/windows.svg';
import linux from 'public/assets/linux.svg';

type SkillsProps = {
  image: string;
  name: string;
};

export const skills: SkillsProps[] = [
  {
    image: html,
    name: 'HTML',
  },
  {
    image: css,
    name: 'CSS',
  },
  {
    image: javascript,
    name: 'JavaScript',
  },
  {
    image: typescript,
    name: 'TypeScript',
  },
  {
    image: react,
    name: 'React',
  },
  {
    image: nextjs,
    name: 'NextJS',
  },
  {
    image: tailwind,
    name: 'Tailwind',
  },
  {
    image: nodejs,
    name: 'NodeJS',
  },
  {
    image: mongodb,
    name: 'MongoDB',
  },
  {
    image: fastify,
    name: 'Fastify',
  },
  {
    image: express,
    name: 'Express',
  },
  {
    image: prisma,
    name: 'Prisma',
  },
  {
    image: git,
    name: 'Git',
  },
  {
    image: github,
    name: 'Github',
  },
  {
    image: windows,
    name: 'Windows',
  },
  {
    image: linux,
    name: 'Linux',
  },
];
