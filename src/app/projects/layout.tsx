import { Metadata } from 'next';
import { ReactNode } from 'react';

type ProjectsLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Section to show my best projects',
};

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return children;
}
