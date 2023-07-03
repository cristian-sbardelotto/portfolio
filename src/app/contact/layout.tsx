import { ChildrenComponentProps } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Section to see how to contact me',
};

export default function ContactLayout({ children }: ChildrenComponentProps) {
  return children;
}
