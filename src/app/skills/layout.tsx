import { ReactNode } from 'react';

type SkillsLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: 'Skills',
  description: 'Section to tell about my skills and technologies',
};

export default function SkillsLayout({ children }: SkillsLayoutProps) {
  return children;
}
