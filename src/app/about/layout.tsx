import { ReactNode } from 'react';

type SkillsLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: 'About Me',
  description: 'Section to tell more about me',
};

export default function SkillsLayout({ children }: SkillsLayoutProps) {
  return children;
}
