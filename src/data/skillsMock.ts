import html from '../../public/assets/skills/html.svg';
import css from '../../public/assets/skills/css.svg';
import javascript from '../../public/assets/skills/js.svg';
import typescript from '../../public/assets/skills/ts.svg';
import react from '../../public/assets/skills/react.svg';
import nextjs from '../../public/assets/skills/next.svg';
import tailwind from '../../public/assets/skills/tailwind.svg';
import styledComponents from '../../public/assets/skills/styled-components.svg';
import git from '../../public/assets/skills/git.svg';
import github from '../../public/assets/skills/github.svg';
import vscode from '../../public/assets/skills/vscode.svg';
import figma from '../../public/assets/skills/figma.svg';

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
    image: styledComponents,
    name: 'Styled Components',
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
    image: vscode,
    name: 'VS Code',
  },
  {
    image: figma,
    name: 'Figma',
  },
];
