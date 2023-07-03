import { ChildrenComponentProps } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Section to tell about my skills and technologies',
};

export default function SkillsLayout({ children }: ChildrenComponentProps) {
  return children;
}
