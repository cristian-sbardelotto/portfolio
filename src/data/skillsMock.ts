import html from 'public/assets/skills/html.svg';
import css from 'public/assets/skills/css.svg';
import javascript from 'public/assets/skills/js.svg';
import typescript from 'public/assets/skills/ts.svg';
import react from 'public/assets/skills/react.svg';
import nextjs from 'public/assets/skills/next.svg';
import tailwind from 'public/assets/skills/tailwind.svg';
import git from 'public/assets/skills/git.svg';
import github from 'public/assets/skills/github.svg';
import nodejs from 'public/assets/skills/node.svg';
import fastify from 'public/assets/skills/fastify.svg';
import express from 'public/assets/skills/express.svg';
import prisma from 'public/assets/skills/prisma.svg';
import docker from 'public/assets/skills/docker.svg';
import sql from 'public/assets/skills/sql.svg';

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
    image: git,
    name: 'Git',
  },
  {
    image: github,
    name: 'Github',
  },
  {
    image: nodejs,
    name: 'NodeJS',
  },
  // {
  //   image: mongodb,
  //   name: 'MongoDB',
  // },
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
    image: sql,
    name: 'SQL',
  },
  {
    image: docker,
    name: 'Docker',
  },
];
