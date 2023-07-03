import { ChildrenComponentProps } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Section to show my best projects',
};

export default function ProjectsLayout({ children }: ChildrenComponentProps) {
  return children;
}
