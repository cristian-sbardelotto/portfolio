import { Metadata } from 'next';
import { ReactNode } from 'react';

type SkillsLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Section to tell about my skills and technologies',
};

export default function SkillsLayout({ children }: SkillsLayoutProps) {
  return children;
}
