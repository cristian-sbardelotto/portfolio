import { ReactNode } from 'react';

type ProjectsLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: 'Projects',
  description: 'Section to show my best projects',
};

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return children;
}
