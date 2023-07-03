import { ChildrenComponentProps } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Section to tell more about me',
};

export default function SkillsLayout({ children }: ChildrenComponentProps) {
  return children;
}
